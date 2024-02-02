import React, { useState } from 'react';
import styled from 'styled-components';
import { Place } from '../types/Place';
import { useSelector } from 'react-redux';
import LikeButton from './LikeButton';
import { RootState } from '../store/store';

const PlaceCard: React.FC<Place& { size?: string}> = ({ 
    title,src, description,liked: initialLiked, size})=> {
    const [liked, setLiked] = useState(initialLiked);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const toggleHandler=()=>{
      if(!isAuthenticated){
        console.log('로그인해주세요');
      }else{
        setLiked(!liked);
      }
    };
    return (
      <CardContainer size={size}>
        <Image src={src} size={size}/>
        <ContentContainer>
          <ContentWrapper>
            <Title>{title}</Title>
            <LikeButton liked={liked} onToggleLike={toggleHandler} />
          </ContentWrapper>
          <Description>{description}</Description>
        </ContentContainer>
      </CardContainer>
    );
};

export default PlaceCard;

const CardContainer = styled.div<{size?: string}>`
  width: ${props => props.size || '225px'};
  min-width: 125px;
  margin: 10px auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  border: 1px solid #FEAA00;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
  }
`;

const Image = styled.img<{size?: string}>`
  width: 100%;
  height: ${props => props.size || '225px'};
  min-height: 125px;
  border-radius: 10px 10px 0 0;
`;

const ContentContainer = styled.div`
  padding: 0px 16px;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  margin: 10px 0px 0px 0px;
  max-width:144.5px;
  overflow: hidden; 
  text-overflow: ellipsis; 
`;

const Description = styled.p`
  color: grey;
  margin:10px 0px;
`;
