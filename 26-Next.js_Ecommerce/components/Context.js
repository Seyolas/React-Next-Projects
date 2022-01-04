import React, { useState, useContext, useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const { user, error, isLoading } = useUser();

  const [search,setSearch] = useState('');

  const [fav,setFav] = useState(0);
  const [basket,setBasket] = useState(0);
  const [basketItems,setBasketItems] = useState([]);
  const [favItems,setFavitems] = useState([]);


  const uniqueFavItems = Array.from(new Set(favItems.map(JSON.stringify))).map(JSON.parse);
  const favCount = uniqueFavItems.length;

  const key = 'id';

  // const uniqueBasketItems = Array.from(new Set(basketItems.map(JSON.stringify))).map(JSON.parse);
  const uniqueBasketItems = [...new Map(basketItems.map(item =>
    [item[key], item])).values()];
  const basketCount = uniqueBasketItems.length;

  const removeFavItem = (id)=>{
    const newFavList = [...uniqueFavItems.filter((i)=>i.id!=id)];
    setFavitems(newFavList);
    
 }
 const removeBasketItem = (id)=>{
  const newBasketList = [...uniqueBasketItems.filter((i)=>i.id!=id)];
  setBasketItems(newBasketList);
  
}




  return <AppContext.Provider value={{user, error, isLoading,fav,setFav,favItems,
    setFavitems,uniqueFavItems,favCount,removeFavItem,
    basketCount,setBasket,basketItems,uniqueBasketItems,
    setBasketItems,removeBasketItem,search,setSearch}}>{children}</AppContext.Provider>

}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }