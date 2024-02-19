import styled from "styled-components";
import RelativePostingBox from "./RelativePostingBox";
import { BlackBtn, BlackText } from "../../shared/Text";

const RelativePosting = ({postId}:{postId:number}) => {
  return (
    <Box>
    <div style={{width:'100%', display:"flex",alignItems:'end',gap:'10px'}}>
      <div style={{fontSize:"30px",fontWeight:'bolder',color:"#FEAA00"}}>떡도리탕</div>
      <BlackText bold={true} size={'20px'}>관련글...</BlackText>
    </div>
      <RelativePostingBox postId={postId}></RelativePostingBox>
      <div style={{width:'100%', display:"flex",justifyContent:'end',gap:'10px'}}>
        <BlackBtn size={'20px'}>전체보기</BlackBtn>
      </div>
    </Box>
  );
};

export default RelativePosting;

const Box = styled.div`
  width:80%;
  padding:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
