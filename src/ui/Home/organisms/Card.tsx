import React from 'react'
import { 
    Card as CardProduct,
    Img,
    H3,
    Paragraph,
    TextContainer
    } from  "../styles/Home"

import CardButton from '../atoms/CardButton'
import { ProductProp } from "../../../logic/typing/products"

export default function Card({product} : ProductProp) {
  return (
    <CardProduct>
        <img src={product.image} alt="image " />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
    </CardProduct>
  )
}
