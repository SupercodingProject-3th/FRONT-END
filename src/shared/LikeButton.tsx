import React, { useState } from 'react';
import styled from "styled-components";
import Love from '../assets/icon/heart.svg'
import FullLove from '../assets/icon/heart_full.svg'

const LikeButton: React.FC<{liked: boolean, onToggleLike: () => void}> = ({liked, onToggleLike }) => {
    return (
        <LikesButtonContainer onClick={onToggleLike}>
            <Image src={liked ? FullLove : Love} alt="게시글 좋아요 하트" />
        </LikesButtonContainer>
    );
};

export default LikeButton;

const LikesButtonContainer = styled.button`
display: flex;
width: 2.4rem;
height: 2.4rem;
justify-content: center;
align-items: center;
background-color:#ffffff;
border: none;
outline: none;
`;

const Image = styled.img`
  width: 100%;
  object-fit:cover;
  cursor:pointer;
`;