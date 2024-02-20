import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/media';
import Skeleton from './Skeleton';

const SkeletonCard = () => {
    return (
        <SkeletonContainer>
            {[...Array(12)].map((_, index) => (
            <Skeleton key={index} width="257px" height="340px" />
            ))}
        </SkeletonContainer>
    );
};

export default SkeletonCard;


const SkeletonContainer = styled.div` 
  display: grid;
  justify-content: center;
  padding: 30px 0px;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  ${media.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;