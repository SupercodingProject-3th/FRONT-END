import React, { useCallback } from 'react';
import { useInfiniteQuery} from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { media } from '../../styles/media';
import PlaceCard from '../../shared/PlaceCard';
import { getApiList} from '../../api/listApi';
import { flatten } from 'lodash';
import SkeletonCard from '../../shared/SkeletonCard';
import { ApiResponse } from '../../types/Place';
import { PlaceCardGridProps } from '../../types/Place';
import ScrollToTopButton from '../../shared/ScrollTopButton';

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
      <ScrollToTopButton/>
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
`;
