import React, { useState,Suspense } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SkeletonCard from '../../shared/SkeletonCard';
import { Place } from '../../types/Place';
import SearchPlaceCardGrid from '../../components/placeList/SearchPlaceCardGrid';

interface RouteParams {
    keyword: string;
  }
  const SearchPlacesList= () => {
    const { keyword } = useParams() as { keyword: string };
    const [cards, setCards] = useState<Place[]>([]);
    const safeKeyword = keyword || "";

    return (
        <Container>
            <Wrapper>
            <TextDiv>{cards.length > 0 ? `'${keyword}' 관련 맛집 목록.` : `'${keyword}' 결과가 없습니다.`}</TextDiv>
            </Wrapper>
            <Suspense fallback={<SkeletonCard/>}>
                <SearchPlaceCardGrid
                  keyword={safeKeyword} cards={cards} setCards={setCards}
                />
            </Suspense>
        </Container>
    );
};

export default SearchPlacesList;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0.3rem 0;
`;

const TextDiv = styled.div`
width: 100%;
height: 50px;
font-size: 20px;
font-weight: 400;
`;