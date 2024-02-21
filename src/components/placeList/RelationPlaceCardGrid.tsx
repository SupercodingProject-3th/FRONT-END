import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';
import PlaceCard from '../../shared/PlaceCard';
import { getApiRelation } from '../../api/listApi';
import { Place } from '../../types/Place';

interface RelationPlaceCardGridProps {
    postId: number;
    selectedOrder: string;
  }
  
  const RelationPlaceCardGrid: React.FC<RelationPlaceCardGridProps> = ({ postId, selectedOrder }) => {
    const [cards, setCards] = useState<Place[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { content } = await getApiRelation(postId, selectedOrder);
            setCards(content );
        };
        fetchData();
    }, [postId, selectedOrder]);
    return (
        <GridContainer>
              {cards.map((card,index) => (
                    <PlaceCard key={index} {...card} size="255px" />
              ))}
        </GridContainer>
      );
};

export default RelationPlaceCardGrid;

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
