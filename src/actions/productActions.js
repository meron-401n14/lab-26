
import { FETCH_PRODUCTS } from "./types";


export const fetchProducts = () => (dispatch)=> {
  fetch('http://localhost:8000/Products/').then(res => res.json())
  .then(data => {
    
    return {type:FETCH_PRODUCTS, payload:data}
    
  })
    
}