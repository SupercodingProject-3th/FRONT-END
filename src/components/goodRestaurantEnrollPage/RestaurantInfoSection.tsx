import React from 'react';

interface RestaurantInfoSectionProps {
  children: React.ReactNode;
}

const RestaurantInfoSection: React.FC<RestaurantInfoSectionProps> = ({ children }) => {
  return <div className="restaurant-info-section">{children}</div>;
};

export default RestaurantInfoSection;