import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInfiniteQuery} from 'react-query';
import { media } from '../../styles/media';
import PlaceCard from '../../shared/PlaceCard';
import { getApiSearch } from '../../api/listApi';
import { ApiResponse, Place } from '../../types/Place';


interface SearchPlaceCardGridProps {
    keyword: string;
    setCards: (cards: Place[]) => void; 
    cards: Place[]; 
}
const SearchPlaceCardGrid: React.FC<SearchPlaceCardGridProps> = ({ keyword, setCards, cards }) => {
    const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery<ApiResponse, Error>(
       [keyword],
      ({ pageParam = 0 }) => getApiSearch(pageParam, 12, keyword),
      {
        getNextPageParam: (lastPage) => lastPage.lastVisible,
        suspense: true
      }
    );
    return (
        <GridContainer>
              {cards.map((card,index) => (
                    <PlaceCard key={index} {...card} size="255px" />
              ))}
        </GridContainer>
    );
};

// const SearchPlaceCardGrid: React.FC<SearchPlaceCardGridProps> = ({ keyword, setCards, cards }) => {

//     useEffect(() => {
//         const fetchData = async () => {
//             const { content } = await getApiSearch(keyword);
//             setCards(content );
//         };
//         fetchData();
//     }, [setCards]);
//     return (
//         <GridContainer>
//               {cards.map((card,index) => (
//                     <PlaceCard key={index} {...card} size="255px" />
//               ))}
//         </GridContainer>
//       );
// };

export default SearchPlaceCardGrid;

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
