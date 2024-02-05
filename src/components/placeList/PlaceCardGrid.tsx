import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { media } from '../../styles/media';
import PlaceCard from '../../shared/PlaceCard';
import { Place } from '../../types/Place';

interface PlaceCardGridProps {
  selectedLocation: string;
  selectedCategory: string;
  selectedOrder: string;
}

const PlaceCardGrid: React.FC<PlaceCardGridProps> = ({ selectedLocation, selectedCategory, selectedOrder }) => {
    const [places, setPlaces] = useState<Place[]>([]);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.post('https://www.onesol.shop/v1/api/post/post-list?page=0&size=10', {
              neighborhood: selectedLocation, category: selectedCategory, order: selectedOrder
            }, {
              headers: {
                'Content-Type': 'application/json',
              }
            });
            if (Array.isArray(data.content) && data.content.length > 0) {
              const transformedPlaces = data.content.map((item: any) => ({
                title: item.name,
                category: item.category,
                image: item.mainPhoto,
                liked: false,
              }));
              setPlaces(transformedPlaces);
            } else {
              console.log("데이터가 비어있거나 예상한 형식이 아닙니다.");
              setPlaces([]); 
            }
          } catch (error) {
            console.error('Fetching places failed:', error);
          }
        };
        fetchData();
      }, [selectedLocation, selectedCategory, selectedOrder]);


  return (
    <GridContainer>
      {places.map((place,index) => (
        <PlaceCard key={index} {...place} size="255px" />
      ))}
    </GridContainer>
  );
};

export default PlaceCardGrid;


const GridContainer = styled.div`
    margin: 0rem auto;
    justify-content: center;
    display: grid;
    gap:20px;
    grid-template-columns: repeat(4, 1fr);
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