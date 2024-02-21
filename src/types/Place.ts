
export interface Place {
  postId: number;
  name: string;
  neighborhood: string;
  category: string;
  menu: string;
  viewCount: string;
  mainPhoto: string;
  createAt: string;
  favoriteCount: string;
  userId: null | string; 
  favoriteYn: string|Boolean;
}

export interface PlaceCardGridProps {
  selectedLocation: string;
  selectedCategory: string;
  selectedOrder: string;
}

export interface SearchPlace {
  postId: number;
  userId: null | string; 
  name: string;
  mainPhoto: string;
  viewCount: string;
  favoriteCount: string;
  favoriteYn: string;
}

export interface ApiResponse {
  content: Place[];
  lastVisible: number | null;
  totalElements: number;
  totalPages: number;
}

export interface Category {
  id: number
  name: string;
  text: string;
}

export interface LocationCategory {
  name: string;
  text: string;
}

export interface FetchPlacesParams {
  neighborhood: string;
  category: string;
  order: string;
}