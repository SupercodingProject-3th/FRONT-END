import styled from "styled-components";

interface ImageContainerProps {
  imageUrl: string;
  marginTop?: string;
  sizes?: string;
}

const ImageContainer = ({
  imageUrl,
  marginTop = "pt-[100%]",
  sizes = "240px",
}: ImageContainerProps) => {
  return (
    <RecipeImgContainer className={marginTop}>
      <RecipeImgWrapper>
        <img
          sizes={sizes}
          src="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMTFfMjQ3/MDAxNjMzOTYxODI5MDA5.2U-LWqwUzfo1RHQ9r9gh6HFA9XBqcIB50Hk7DaZdEbwg.z9_930hLpndCKNoVOab2SS7o97P_qlmq18ZLJ-XHPvgg.JPEG.kgyfjq/IMG_2157.jpg?type=w800"
          style={{ objectFit: "cover", backgroundColor: "#f5f5f5" }}
          alt="게시물 썸네일 이미지"
        />
      </RecipeImgWrapper>
    </RecipeImgContainer>
  );
};

export default ImageContainer;

const RecipeImgContainer = styled.div`
  position: relative;
  margin-top: "0";
  overflow: hidden;
  border-radius: 8px;
`;

const RecipeImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
