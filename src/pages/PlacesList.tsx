import React, { useState } from 'react';
import styled from 'styled-components';
import MenuCategory from '../components/placeList/MenuCategory';
import AreaFilter from '../components/placeList/AreaFilter';
import PlaceCardGrid from '../components/placeList/PlaceCardGrid';
import MenuFilter from '../components/placeList/MenuFilter';

const PlacesList: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedOrder, setSelectedOrder] = useState<string>('최신순');

  return (
    <Container>
      <Wrapper>
        <AreaFilter selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        <MenuFilter selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
      </Wrapper>
      <MenuCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <PlaceCardGrid
        selectedLocation={selectedLocation}
        selectedCategory={selectedCategory}
        selectedOrder={selectedOrder}
      />
    </Container>
  );
};

export default PlacesList;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0.3rem 0;
`;
