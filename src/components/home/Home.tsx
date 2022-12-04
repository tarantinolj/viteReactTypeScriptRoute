import React, { FC, useState, useEffect } from 'react';
import { ProductService } from '../../services/ProductService';
import { IProduct } from '../../types/product.interface';
import { useQuery } from 'react-query';
import styles from './Home.module.scss';
import ProductItem from '../ui/product-item/ProductItem';
import Layout from '../ui/layout/Layout';


const Home:FC = () => {

  const {
    data:products,
    isLoading
  } = useQuery(['products'],() => ProductService.getProducts(),{
    select: ({ products }) => products
  })

  // const [products, setProducts] = useState<IProduct[]>([]);
  // const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(true)
  
  // // Первый Вариант с Промиссами 
  // // useEffect(()=>{
  // //   ProductService.getProducts()
  // //   .then(data => setProducts(data.products))
  // //   .catch(error => setError(error))
  // //   .finally(()=>setIsLoading(false));
  // // },[])


  // /*Второй вариант с Async Await*/
  // useEffect(()=>{
   
  //   const fetch = async()=>{
  //     try{
  //       const  {products} = await ProductService.getProducts()
  //       setProducts(products)
  //     } catch(error:any){
  //       setError(error)
  //     } finally{
  //        setIsLoading(false)
  //     }
  //   }
  //   fetch()
  // },[])

  return (
    <Layout title="Shop the collection">
      {isLoading ? ( 
        <div className='text-blue-400 text-2xl'>Loading...</div>
      ) : products?.length ? (
        <div className={styles.wrapper}>
      {products.map(product =>(
        <ProductItem product={product} key={product.id}/>
      ))}
      </div>
      ) : (
      <div>Products not found...</div>
      )}
    </Layout>
  )
}

export default Home;