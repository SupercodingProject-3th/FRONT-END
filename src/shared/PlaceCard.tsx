import React, { useState,FC } from 'react';
import styled from 'styled-components';
import { Place } from '../types/Place';
import { useSelector } from 'react-redux';
import LikeButton from './LikeButton';
import {RootState} from '../store/store';
import { postApiLike } from '../api/listApi';

const PlaceCard: React.FC<Place& { size?: string}&{onCardClick?: () => void}> = ({ 
  postId, name, category,mainPhoto,favoriteYn:initialLiked, userId, size, onCardClick })=> {
    const [liked, setLiked] = useState(initialLiked === "Y");
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const toggleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      const token = localStorage.getItem("token");
      if (!token) {
        alert('로그인 후 이용해 주세요.');
      } else {
        setLiked(!liked);
        postApiLike(postId);
      }
    };
    return (
      <CardContainer size={size} onClick={onCardClick}>
        <Image src={mainPhoto} alt={name} size={size} /> 
        <ContentContainer>
          <ContentWrapper>
            <Title>{name}</Title>
            <LikeButton liked={liked} onToggleLike={toggleHandler} />
          </ContentWrapper>
          <Description>{category}</Description>
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
  min-height: ${props => {
    const size = parseInt(props.size || '0', 10);
    return size < 125 ? '125px' : props.size || '125px';
  }};
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
  max-width:150px;
  overflow: hidden; 
  text-overflow: ellipsis; 
  text-align: left;
`;

const Description = styled.p`
  color: grey;
  margin:10px 0px;
  text-align: left;
`;