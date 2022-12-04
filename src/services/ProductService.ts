import axios from "axios"
import { IProductsReponse } from "../types/product.interface"
import { IProduct } from "../types/product.interface"

axios.defaults.baseURL = 'https://dummyjson.com'


export const ProductService ={
    async getProducts(){
        const response = await axios.get<IProductsReponse>('/products',{
            params:{
                limit: 5
            }
        })
        return response.data
    },

    async getProductsById(id:string){
        const response = await axios.get<IProduct>(`/products/${id}`)
        return response.data
    }

}