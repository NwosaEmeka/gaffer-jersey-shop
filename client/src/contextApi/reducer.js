import data from '../data.json'
import { addtoBasketAction } from './Actions/addToBasketAction'
import { increaseItem, decreaseItem, removeItem } from './Actions/cartActions'
import { filterByTeamAction, sortByPriceAction } from './Actions/FilterActions'

// Set the initial state of the application
export const initialState = {
  products: data.products,
  allTeams: data.products,
  basket: JSON.parse(localStorage.getItem('basketItem')) || [],
  user: null
}


export const getTotal = (basket) => basket?.reduce((total, item) => total + (item.price * item.quantity), 0)

export const itemCount = (basket) => basket?.reduce((count, item) => count + item.quantity, 0)


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket:  addtoBasketAction(state.basket, action.payload)
      }
    case 'FILTER_BY_TEAM':
      return {
        ...state,
        products: filterByTeamAction(state.allTeams, action.payload)
      }
    case 'SORT_BY_PRICE':
      return {
        ...state,
        products: sortByPriceAction(state.products, action.payload)
      }
    case 'INCREASE_ITEM_QUANTITY':
      return{
        ...state,
        basket: increaseItem(state.basket, action.payload)
      }
    case 'DECREASE_ITEM_QUANTITY':
      return{
        ...state,
        basket: decreaseItem(state.basket, action.payload)
      }
    case 'REMOVE_ITEM_FROM_BASKET':
      return {
        ...state,
        basket: removeItem(state.basket, action.payload)
      }
    case 'CLEAR_BASKET':
      localStorage.clear('basketItem');
      return {
        ...state,
        basket: []
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default reducer