import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading:false,
  cart:cartItems,
  total:0,
  amount:0,
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const clearCarts=()=>{
    dispatch({type:'CLEAR_ALL'})
  }
  const removeItem= (id)=>{
    dispatch({type:'DELETE_ITEM',payload:id})
  }
  const increase = (id)=>{
    dispatch({type:'INCREASE',payload:id})
  }
  const decrease = (id,type)=>{
    dispatch({type:'DECREASE',payload: { id, type }})
  }

 const fetchData = async ()=>{
   dispatch({type:'LOADING'})
   const response = await fetch(url);
   const cart = await response.json();
   dispatch({type:'DISPLAY_ITEMS',payload:cart})
 }

 useEffect(() => {
   fetchData()
   
 },[])


  useEffect(() => {
    dispatch({type:'GET_TOTALS'})
  
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{...state, clearCarts,removeItem,increase,decrease}}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
