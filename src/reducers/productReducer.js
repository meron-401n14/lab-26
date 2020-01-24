
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TYPE, ORDER_PRODUCTS_BY_PRICE } from "../actions/types";



const  initialState = {items: [], filteredItems:[], type:''};

export default function (state = initialState, action){
  switch(action.type){
     case FETCH_PRODUCTS: 
        return {...state, filteredItems: action.payload};
      case FILTER_PRODUCTS_BY_TYPE: 
      return {...state, filteredItems: action.payload.items, type:action.payload.type};

      case ORDER_PRODUCTS_BY_PRICE: 
      return {...state, filteredItems: action.payload.items, type:action.payload.type};
        default:
          return state;
  }
}
