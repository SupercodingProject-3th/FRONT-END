import axios from 'axios';
import { Place } from '../types/Place';

export async function getApiList(pageParam: number, sizeParam: number, selectedLocationParam: string, selectedCategoryParam: string, selectedOrderParam: string): Promise<{content: Place[], lastVisible: number | null, totalElements: number, totalPages: number}> {
    const response = await axios.post(`https://www.onesol.shop/v1/api/post/post-list`, {
        params: {
            page: pageParam, 
            size: sizeParam,
            selectedLocation: selectedLocationParam, 
            selectedCategory: selectedCategoryParam,
            selectedOrder: selectedOrderParam
          }
    });
    
    const { content, totalPages, totalElements } = response.data.data;
    const nextPage = pageParam + 1;
    const lastVisible = nextPage < totalPages ? nextPage : null;
  
    return { content, lastVisible, totalElements, totalPages };
}