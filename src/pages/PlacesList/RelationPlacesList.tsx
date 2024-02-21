import React, { useState,Suspense } from 'react';
import styled from 'styled-components';
import PlaceCardGrid from '../../components/placeList/PlaceCardGrid';
import MenuFilter from '../../components/placeList/MenuFilter';
import SkeletonCard from '../../shared/SkeletonCard';
import RelationPlaceCardGrid from '../../components/placeList/RelationPlaceCardGrid';

const RelationPlacesList = (postId: number) => {
    const [selectedOrder, setSelectedOrder] = useState<string>('최신순');
    return (
        <Container>
            <Wrapper>
                <MenuFilter selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
            </Wrapper>
            <Suspense fallback={<SkeletonCard/>}>
                <RelationPlaceCardGrid
                  postId={postId} selectedOrder={selectedOrder}
                />
            </Suspense>
        </Container>
    );
};

export default RelationPlacesList;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0.3rem 0;
`;