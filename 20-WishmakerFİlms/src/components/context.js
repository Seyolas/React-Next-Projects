import React, { useState, useContext, useEffect } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const cards = [

    {
      id:1,
      title:'Making Memories',
      content:'Our team captures your adventure cinematically.  Our goal is storytelling. We provide edits that are unique to each experience.',
      src:'https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/94f9915e-1c3e-4800-8a39-ce20433cb653.jpg/:/cr=t:0%25,l:16.83%25,w:66.75%25,h:100%25/rs=w:547.5,h:547.5,cg:true'

    },

    {
      id:2,
      title:'Our Approach',
      content:'Whether this is your first family vacation, wedding, or just another zoom down Space Mountain, we are there to capture the fun.',
      src:'https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/f4303016-ec26-4fd0-a0cd-c19c71632ee3.jpg/:/rs=w:547.5,h:547.5,cg:true,m/cr=w:547.5,h:547.5'
    },

    {
      id:3,
      title:'Possibilities',
      content:'Your own personalized videographer will follow you around Magic Kingdom, Animal Kingdom, Hollywood Studios, Epcot, resorts, or anywhere else you would like us to.',
      src:'https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/a4abd607-5931-45bd-a728-59fb0ce6e5e9.jpg/:/cr=t:0%25,l:3.49%25,w:66.8%25,h:100%25/rs=w:547.5,h:547.5,cg:true'
    },

   
  ]
   
  const [card,setCard] = useState(cards);


  return <AppContext.Provider value={{card}}>{children}</AppContext.Provider>

}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }


