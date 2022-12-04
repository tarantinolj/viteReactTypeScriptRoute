import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../types/product.interface'
import styles from './ProductItem.module.scss'
const ProductItem:FC<{product: IProduct}> = ({product}) => {
  return (
   <div className={styles.item}>
    <Link to={`/product/${product.id}`}>
      <div className={styles.image}
        style={{
          backgroundImage: `url(${product.thumbnail})`
      }}/>
    </Link>
    <div className={styles.heading}>{product.title}</div>
     <div className={styles.price}>
      {new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
     }).format(product.price)}</div>
   </div>
  )
}

export default ProductItem;