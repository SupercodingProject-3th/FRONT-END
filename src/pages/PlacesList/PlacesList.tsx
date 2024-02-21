import React, { useState,Suspense } from 'react';
import styled from 'styled-components';
import MenuCategory from '../../components/placeList/MenuCategory';
import AreaFilter from '../../components/placeList/AreaFilter';
import PlaceCardGrid from '../../components/placeList/PlaceCardGrid';
import MenuFilter from '../../components/placeList/MenuFilter';
import Skeleton from '../../shared/Skeleton';
import { media } from '../../styles/media';
import SkeletonCard from '../../shared/SkeletonCard';
import Header from '../../shared/Header';

const PlacesList = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedOrder, setSelectedOrder] = useState<string>('최신순');

  return (
    <>
      <Header/>
      <Container>
        <Wrapper>
          <AreaFilter selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
          <MenuFilter selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
        </Wrapper>
        <MenuCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Suspense fallback={<SkeletonCard/>}>
        <PlaceCardGrid
          selectedLocation={selectedLocation}
          selectedCategory={selectedCategory}
          selectedOrder={selectedOrder}
        />
        </Suspense>
      </Container>
    </>

  );
};

export default PlacesList;

const SkeletonContainer = styled.div` 
  display: grid;
  justify-content: center;
  padding: 30px 10px;
  border-top: 2px solid #000;
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
const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0.3rem 0;
`;
