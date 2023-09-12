import  { Product } from "../typing/products"
import axios, { AxiosResponse } from 'axios';

export const getProducts = async (): Promise<Product[]> => {
    try {
      const response: AxiosResponse<Product[]> = await axios.get('https://fakestoreapi.com/products'); // Reemplaza con tu URL
     
      return response.data;
    } catch (error) {
      console.error('Error getting products:', error);
      throw error; 
    }
  };