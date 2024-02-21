import React, { useState,Suspense } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SkeletonCard from '../../shared/SkeletonCard';
import SearchPlaceCardGrid from '../../components/placeList/SearchPlaceCardGrid';
import Header from '../../shared/Header';

  const SearchPlacesList= () => {
    const { keyword } = useParams() as { keyword: string };
    const safeKeyword = keyword || "";

    return (
        <>
        <Header/>
        <Container>
            <Suspense fallback={<SkeletonCard/>}>
                <SearchPlaceCardGrid
                  keyword={safeKeyword}
                />
            </Suspense>
        </Container>
        </>
    );
};

export default SearchPlacesList;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;