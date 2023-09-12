import React, { useEffect, useState } from 'react'

import { getProducts } from "../logic/services/getProducts"; 

import { Home as HomeContainer } from '../styles/home'
import { Product } from '../logic/typing/products';
import Card from '../ui/Home/organisms/Card';

export default function Home() {
    const [products, setProducts] = useState([] as Array<Product>);
    useEffect( () => {
        getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <HomeContainer>
        {
            products.map((product: Product) =>(<Card product={product} />))
        }
    </HomeContainer>
  )
}
