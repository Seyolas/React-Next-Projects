import React, { useState, useContext, useEffect } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [fav,setFav] = useState(0);
  const [favItems,setFavitems] = useState([]);

  const uniqueFavItems = Array.from(new Set(favItems.map(JSON.stringify))).map(JSON.parse);
  const favCount = uniqueFavItems.length;

  const removeItem = (id)=>{
    const newList = [...uniqueFavItems.filter((i)=>i.id!=id)];
    setFavitems(newList);
    
 }


  return <AppContext.Provider value={{fav,setFav,favItems,
    setFavitems,uniqueFavItems,favCount,removeItem}}>{children}</AppContext.Provider>

}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }