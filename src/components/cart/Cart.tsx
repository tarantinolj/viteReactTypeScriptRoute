import React, { FC } from 'react'
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Layout from '../ui/layout/Layout'
import styles from './Cart.module.scss'
import Button from '../ui/button/Button';

const Cart :FC= () => {
  const {items} = useTypedSelector(state => state.cart);
  const { removeFromCart } = useAction()

  return <Layout title='Cart'>
    {items.length ? (
      <>
      <div className={styles.cart}>
        {items.map(product =>(
          <div key={product.id}>
            <span>{product.title}</span>
            <button onClick={()=> removeFromCart(product.id)}
            className='text-red-500'
            >
               Remove
            </button>
          </div>
        ))}
        </div>
        <Button>CheckOut</Button>
      </>
       ) : (
          <div> Cart is empty!</div>
        )}

        
  
  </Layout>
}

export default Cart