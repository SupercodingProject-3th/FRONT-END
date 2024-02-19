import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeartIcon } from '../../shared/HeartIcon';
import { checkPostLikeData, fetchPostLikeData } from "./uselogic/fetchLikeData";
import { BlackBtn, BlackText, GrayText } from "../../shared/Text";


interface DetailPageMenuType{
  postId:number;
  viewCount:number;
  favoriteCount:number;
  createAt:string;
  updateAt:string|null;
  sameuser?:boolean;
}


const DetailPageMenu:React.FC<DetailPageMenuType>  = ({postId,viewCount,favoriteCount,createAt,updateAt,sameuser}) => {
  const [like, setLike] = useState<boolean>(false);
  const clickLike = () => {
    setLike(!like);
    fetchPostLikeData(postId)
  };

  useEffect(()=>{
    const fetchPostLikedSetState = async () => {
      try {
        const data = await checkPostLikeData(postId);
        setLike(data.data);
      } catch (error) {
        // 오류 처리
      }
    };
  fetchPostLikedSetState()
  },[like])


  
  return (
    <StyledDiv style={{flexDirection:"column",alignItems:"end"}}>
      <StyledDiv>
        {sameuser &&<StyledDiv>
            <StyledLink to="/">수정</StyledLink>
              <BlackBtn>삭제</BlackBtn>
            </StyledDiv>}
            <div>{updateAt!==null?updateAt.slice(0, 10):createAt.slice(0, 10)}</div>
          </StyledDiv>
          <StyledDiv>
          <StyledDiv>
            <BlackText>조회수</BlackText>
            <BlackText bold={true}>{viewCount}</BlackText>
          </StyledDiv>
          <StyledDiv>
            <div onClick={clickLike}>
            <HeartIcon like={like}></HeartIcon>
            </div>
            <BlackText bold={true}>{favoriteCount}</BlackText>
          </StyledDiv>
          </StyledDiv>
      </StyledDiv>
  );
};

export default DetailPageMenu;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  width: max-content
  margin: 0px 3px 0px 3px;
  font-size:15px;
  &:hover {
    font-weight: bolder;
    color: black;
  }
`;

const StyledDiv= styled.div`
display: flex;
gap:  10px;

`;
