export interface Place {
  title: string;
  src:string;
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