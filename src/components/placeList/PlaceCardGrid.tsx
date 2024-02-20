import React, { useCallback } from 'react';
import { useInfiniteQuery,InfiniteData, UseInfiniteQueryResult } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { media } from '../../styles/media';
import PlaceCard from '../../shared/PlaceCard';
import { getApiList } from '../../lib/api';
import { Place } from '../../types/Place'; 
import { flatten } from 'lodash';
import SkeletonCard from '../../shared/SkeletonCard';

interface PlaceCardGridProps {
  selectedLocation: string;
  selectedCategory: string;
  selectedOrder: string;
}
interface ApiResponse {
  content: Place[];
  lastVisible: number | null;
  totalElements: number;
  totalPages: number;
}

const formatQueryValue = (value: string) => value === '전체' ? "" : value;
const PlaceCardGrid: React.FC<PlaceCardGridProps> = ({ selectedLocation, selectedCategory, selectedOrder }) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery<ApiResponse, Error>(
    [selectedLocation, selectedCategory, selectedOrder],
    ({ pageParam = 0 }) => getApiList(pageParam, 12, 
      formatQueryValue(selectedLocation), formatQueryValue(selectedCategory), selectedOrder),
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

export default PlaceCardGrid;

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
