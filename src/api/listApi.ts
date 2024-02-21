import axios from 'axios';
import { Place } from '../types/Place';
import { SearchPlace } from '../types/Place';

export async function getApiList(pageParam: number, sizeParam: number, selectedLocationParam: string, selectedCategoryParam: string, selectedOrderParam: string): Promise<{content: Place[], lastVisible: number | null, totalElements: number, totalPages: number}> {
    const token =localStorage.getItem("token");
    const config = token ? { headers:{ Token: token } } : {};
    const response = await axios.post(`https://www.onesol.shop/v1/api/post/post-list?page=${pageParam}&size=${sizeParam}`, {
            neighborhood: selectedLocationParam, 
            category: selectedCategoryParam,
            order: selectedOrderParam
    }, config);
    
    const { content, totalPages, totalElements } = response.data.data;
    const nextPage = pageParam + 1;
    const lastVisible = nextPage < totalPages ? nextPage : null;
  
    return { content, lastVisible, totalElements, totalPages };
}

export async function postApiLike(postId: number): Promise<{ content: string }> {
    const token =localStorage.getItem("token");
	const userId=localStorage.getItem("userId");
    const response = await axios.post(`https://www.onesol.shop/v1/api/post-like-heart/${postId}`, {
        userId: userId
    }, {
        headers: {
            Token: token
        }
    });
    
    const { content } = response.data.message;
    return { content};
}

export async function getApiRelation(postId: number,selectedOrderParam: string): Promise<{ content: Place[] }> {
    const response = await axios.post(`https://www.onesol.shop/v1/api/post-relation/${postId}?order=${selectedOrderParam}`);
    
    const { content } = response.data.data;
    return { content};
}

export async function getApiSearch(pageParam: number, sizeParam: number,keywordParam: string): Promise<{content: Place[], lastVisible: number | null, totalElements: number, totalPages: number}> {
    const response = await axios.get(`https://www.onesol.shop/v1/api/search?keyword=${keywordParam}&page=${pageParam}&size=${sizeParam}`);
    
    const { content, totalPages, totalElements } = response.data.data;
    const nextPage = pageParam + 1;
    const lastVisible = nextPage < totalPages ? nextPage : null;
  
    return { content, lastVisible, totalElements, totalPages };
}