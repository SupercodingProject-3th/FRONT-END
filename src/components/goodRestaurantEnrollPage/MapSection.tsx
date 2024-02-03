import React from 'react';
import styled from 'styled-components';

const MapSection: React.FC = () => {
  return (
    <MapSectionContainer>
      <InnerDiv>
        Map Section
      </InnerDiv>
    </MapSectionContainer>
  );
};

export default MapSection;

const MapSectionContainer = styled.div`
 
`;

const InnerDiv = styled.div`
  padding: 30px; 
  background-color: red;
  margin-top:30px;
`;

