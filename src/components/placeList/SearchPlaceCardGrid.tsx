import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInfiniteQuery} from 'react-query';
import { media } from '../../styles/media';
import { flatten } from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import PlaceCard from '../../shared/PlaceCard';
import SkeletonCard from '../../shared/SkeletonCard';
import { getApiSearch } from '../../api/listApi';
import { ApiResponse, Place } from '../../types/Place';

interface SearchPlaceCardGridProps {
    keyword: string;
}
const SearchPlaceCardGrid: React.FC<SearchPlaceCardGridProps> = ({ keyword}) => {
    const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery<ApiResponse, Error>(
       [keyword],
      ({ pageParam = 0 }) => getApiSearch(pageParam, 12, keyword),
      {
        getNextPageParam: (lastPage) => lastPage.lastVisible,
        suspense: true
      }
    );

    const loadMore = useCallback(() => {
        if (!hasNextPage || isFetching) return;
        fetchNextPage();
      }, [fetchNextPage, hasNextPage, isFetching]);

    if(data == null)
        return null

    const cards = flatten(data.pages.map(page => page.content));

    return (
        <GridContainer>
            <Wrapper>
            <TextDiv>{cards.length > 0 ? `'${keyword}' 관련 맛집 목록.` : `'${keyword}' 결과가 없습니다.`}</TextDiv>
            </Wrapper>
          <InfiniteScroll
            dataLength={cards.length}
            next={loadMore}
            hasMore={hasNextPage|| false}
            loader={<SkeletonCard/>}
          >
            <StyledGridContainer>
              {cards.map((card,index) => (
                    <PlaceCard key={index} {...card} size="255px" />
              ))}
            </StyledGridContainer>
          </InfiniteScroll>
        </GridContainer>
      );

};

export default SearchPlaceCardGrid;

const StyledGridContainer = styled.div` 
  display: grid;
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

const GridContainer = styled.div`
  margin: 0rem auto;
  justify-content: center;
  padding: 30px 0px;
  border-top: 2px solid #000;
`;

const TextDiv = styled.div`
width: 100%;
height: 50px;
font-size: 20px;
font-weight: 400;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0.3rem 0;
`;