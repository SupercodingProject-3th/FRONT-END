import React, { useEffect,useState } from 'react';
import styled from "styled-components";
import { GrayBtn } from '../../shared/Text';
import RelativePostingCard from './RelativePostingCard';
import { getRelativePost, relativePostType } from './uselogic/fetchRelativePosting';

const RelativePostingBox : React.FC<{ postId: number  }> = ({postId}) => {
  const [postData, setPostData] = useState<relativePostType|null>(null);
  const [order, setOrder] = useState<string>('최신순');
  const changeOrder= (a: string, event: React.MouseEvent<HTMLSpanElement>)=>{
    setOrder(a)
  }
  useEffect(() => {
    const fetchCommetDataAndSetState = async () => {
      try {
        const data = await getRelativePost(postId,order);
        await setPostData(data);
      } catch (error) {
        // 오류 처리
      }
    };
    fetchCommetDataAndSetState();
  }, [postId,order]);
  const postListData = postData?.data || [];

  return (
    <div style={{width:'100%',display:"flex",gap:"5px", justifyContent:"end",flexDirection:"column"}}>
     <div style={{display:"flex",gap:"10px", justifyContent:"end",paddingRight:
      "10px"}} >
      <GrayBtn  size={"18px"} bold={order==="최신순"} onClick={(event) => changeOrder("최신순", event)}>
      최신순 
      </GrayBtn>
      <GrayBtn size={"18px"}  bold={order==="인기순"}  onClick={(event) => changeOrder("인기순", event)}>
      인기순 
      </GrayBtn>
      <GrayBtn size={"18px"}   bold={order==="조회순"}  onClick={(event) => changeOrder("조회순", event)}>
      조회순 
      </GrayBtn>
      </div>
      <PostingContainer>
        {postListData.map((post,i)=>{
        return(
        <RelativePostingCard name={post.name} category={post.category
        } mainPhoto={post.mainPhoto} key={i} postid={post.postId} viewCount={post.viewCount}
        ></RelativePostingCard>
          )}
        )}
      </PostingContainer>
    </div>
        
        );
      };

export default RelativePostingBox;

const PostingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
