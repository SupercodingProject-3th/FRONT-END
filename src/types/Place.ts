
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
  favoriteYn: string;
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