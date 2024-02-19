import React, { useCallback } from 'react';
import { useInfiniteQuery,InfiniteData, UseInfiniteQueryResult } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { media } from '../../styles/media';
import PlaceCard from '../../shared/PlaceCard';
import { getApiList } from '../../lib/api';
import { Place } from '../../types/Place'; 
import { flatten } from 'lodash';

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



const PlaceCardGrid: React.FC<PlaceCardGridProps> = ({ selectedLocation, selectedCategory, selectedOrder }) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery<ApiResponse, Error>(
    [selectedLocation, selectedCategory, selectedOrder],
    ({ pageParam = 0 }) => getApiList(pageParam, 12, selectedLocation, selectedCategory, selectedOrder),
    {
      getNextPageParam: (lastPage) => lastPage.lastVisible,
    }
  );

  const loadMore = useCallback(() => {
    if (!hasNextPage || isFetching) return;
    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);
  if(data == null)
    return null

  // const cards = data.pages.flatMap(page => page.content);
  const cards = flatten(data.pages.map(page => page.content));
  

  return (
    <GridContainer>
      <InfiniteScroll
        dataLength={cards.length}
        next={loadMore}
        hasMore={hasNextPage|| false}
        loader={<div>Loading...</div>}
      >
        <StyledGridContainer>
          {cards.map((card) => (
                <PlaceCard key={card.postId} {...card} size="255px" />
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
