import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Postcode from "@actbase/react-daum-postcode";
import REST_API from "../../constant/config";

//onChange 핸들러는 주소 입력란의 값이 변경될 때 호출되고, onAddressChange 핸들러는 주소가 선택되었을 때 호출
interface AddressInputProps {
  onCoordinateChange: (coordinates: {
    latitude: string;
    longitude: string;
  }) => void;
  onChange: (address: string) => void; // 수정된 부분
}

const AddressInput: React.FC<AddressInputProps> = ({
  onCoordinateChange,
  onChange,
}) => {
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] =
    useState<string>("맛집을 검색해보세요");

  const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    onChange(newAddress);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchAddress = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };

 
  const handleSelectedAddress = (data: any) => {
    const documents = data.documents;
    let x: any, y: any;

    if (documents && documents.length > 0) {
      const { x, y } = documents[0]; // documents 배열의 첫 번째 요소에서 x와 y 값을 추출합니다.
      console.log("경도:", x);
      console.log("위도:", y);

      onCoordinateChange({ latitude: y, longitude: x });
    } else {
      console.error("No documents found.");
      // 좌표 값이 없을 경우에는 기본값으로 함수 호출
      onCoordinateChange({
        latitude: "기본 위도 값",
        longitude: "기본 경도 값",
      });
    }

    console.log("경도:", x);
    console.log("위도:", y);

    const { address: selectedAddress } = data;
    // 선택된 주소 정보를 상태에 업데이트하고 상위 컴포넌트로 전달
    setAddress(selectedAddress); // 선택된 주소로 주소 상태를 업데이트합니다.
    setSearchKeyword(selectedAddress);
    console.log("휴...x,y 테스트", x, y);
    onChange(selectedAddress); // 선택된 주소를 상위 컴포넌트로 전달합니다. 이게 원인

    // 선택된 주소를 정보를 기반으로 API 요청 보냄, 경도 위도 받기위해
    fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        selectedAddress
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `KakaoAK ${REST_API}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // 여기서 받은 데이터를 처리합니다.
        console.log("경도 위도 테스트 data", data);
        console.log("경도 위도 테스트 data.documents[0].x", data.documents[0].x); 
        console.log("경도 위도 테스트 data.documents[0].y", data.documents[0].y); 
        console.log("경도 위도 테스트 data.documents[0].address_name", data.documents[0].address_name); 
        onCoordinateChange({ latitude: data.documents[0].y, longitude: data.documents[0].x });
        onChange(data.documents[0].address_name);
        
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      })
      .finally(() => {
        handleCloseModal();
      });
  };

  return (
    <Wrapper>
      <AddressWrapper>
        <Label htmlFor="address">주소</Label>
        <Input
          type="text"
          id="address"
          name="address"
          value={searchKeyword}
          onChange={handleInputChange}
        />
        <Button type="button" onClick={handleSearchAddress}>
          주소 검색
        </Button>
      </AddressWrapper>

      {isModalOpen && (
        <ModalContainer>
          <PostcodeModal>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>{" "}
            <Postcode
              style={{ width: 400, height: 100 }}
              jsOptions={{ animation: true, hideMapBtn: true }}
              onSelected={(data) => {
                alert(
                  "주소를 성공적으로 선택했습니다: " + JSON.stringify(data)
                );
                console.log(JSON.stringify(data));
                handleSelectedAddress(data);
                handleCloseModal();
              }}
              onError={(error) => {
                console.error("Error occurred while fetching address:", error);
              }}
            />
          </PostcodeModal>
        </ModalContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  gap: 10px;
  flex-direction: row;
  margin-bottom: 80px;
  justify-content: space-between;
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const DetailAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Input = styled.input`
  flex: 1;
  width: 50%;
  padding: 0px 100px 0 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px rgba(0, 122, 255, 0.5);
  }
`;

const Button = styled.button`
  flex: 0.5;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  margin-left: 4px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Label = styled.label`
  flex: 0.7;
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  width: 200px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostcodeModal = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  width: 100%;
  height: 2%;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default AddressInput;
