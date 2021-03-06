
import { FETCH_PRODUCTS } from "./types";
import {FILTER_PRODUCTS_BY_TYPE} from './types'
import { ORDER_PRODUCTS_BY_PRICE} from './types'


export const fetchProducts = () => dispatch => {
return  fetch('http://localhost:8000/products')
.then(res => res.json())
  .then(data =>dispatch({
    type:FETCH_PRODUCTS,
    payload: data
  }) 
  );   
}


export const filterProducts = (products, type) => (dispatch)=> {
  
   return dispatch({
     type:FILTER_PRODUCTS_BY_TYPE ,
     payload:{
       type: type,
       items:type === ''? products: products.filter(a => a.Type.indexOf(type.toUpperCase())>=1)
     }
   })
}
    
export const sortProducts = (items, sort) => (dispatch)=> {
  const products = items.slice();
  if(sort !== ''){
    products.sort((a,b)=>(sort==="lowest")?
     (a.price < b.price ? 1:-1):(a.price < b.price? 1:-1))
  } else {
    products.sort((a,b)=>(a.id < b.id? 1:-1));
  }

  return dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload:{
      sort: sort,
      items: products
    }
  })

}