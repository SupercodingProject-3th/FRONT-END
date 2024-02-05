export interface Place {
  title: string;
  category: string;
  image: string;
  liked: boolean; 
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