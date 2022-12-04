import React, { FC } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Layout from '../ui/layout/Layout'
import { ProductService } from '../../services/ProductService'
import Button from '../ui/button/Button';
import Gallery from './gallery/Gallery';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Product :FC= () => {
    const params = useParams();

    const productId = params.id;

    const { data: product ,isLoading } = useQuery(['product',productId], () => ProductService.getProductsById(productId || ''))

    const {items} = useTypedSelector(state => state.cart);
    const {removeFromCart, addToCart} = useAction();

    if(!product) return <Layout><div>Product not found!</div></Layout>

    const isInCart = items.some(item => item.id === Number(productId)) 

  return (
    <Layout>
        { isLoading && <div>Loading...</div> }
        <Gallery images={product.images} />

        <h1 className='text-3xl mb-3 font-semibold p-3 mt-8 flex justify-center'>{product.title}</h1>
        <div className='text-3xl px-3 flex justify-center '>
          {new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(product.price)}</div>

        <Button 
          onClick={()=> 
            isInCart ? removeFromCart(Number(productId)) : addToCart(product)
          }
        >
          { isInCart ? 'This product allready in cart' : 'Add to Cart' } 
        </Button>
    </Layout>
  )
}

export default Product