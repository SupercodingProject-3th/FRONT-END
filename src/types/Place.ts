export interface Place {
  title: string;
  description: string;
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