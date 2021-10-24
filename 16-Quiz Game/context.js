import React, { useState, useContext, useEffect } from 'react'


const AppContext = React.createContext()

// const temp_url = 'https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple';
const api_endpoint='https://opentdb.com/api.php?';
const url='';

const AppProvider = ({ children }) => {

  const [number,setNumber] = useState(10);
  const [optionC,setOptionC]= useState('sports');
  const [option,setOption] = useState('easy') 
  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState([]);
  const [index,setIndex] = useState(0);


   const DifficultyValues = ['easy','medium','hard'];
   const CategoryValues = ['sports','history','politics',];
  
   let x='21';
   if (optionC ==='sports') 
      x='21'
   
   if (optionC ==='history') 
     x='23';
   
   if (optionC ==='politics') 
     x='24';
   


   const fetchData = async (url)=>{
    
     const data = await fetch(url);
     const response = await data.json();
    setResult(response.results);
    
   }

   
  // let sports=21;
  // let history=23;
  // let politics=24;
 
   const handleChange = (e)=>{
    setOption(e.target.value);
    e.preventDefault();

  }
  const handleChangeTwo = (e)=>{
    setOptionC(e.target.value);
    e.preventDefault();

  }

  const handleClick = (e)=>{
    // setLoading(true);
    e.preventDefault();
    console.log(number);
    console.log(optionC);
    console.log(option);
    console.log(x);
    const API_URL = `${api_endpoint}amount=${number}&category=${x}&difficulty=${option}&type=multiple`;
    fetchData(API_URL);
    // setLoading(false);
   
  }




  return <AppContext.Provider 
  value={{
    optionC,setOptionC,option,
    setOption,DifficultyValues,CategoryValues,
    handleChange,handleChangeTwo,handleClick,number,setNumber,
    loading,setLoading,result,index,setIndex
    }}>
    
    
    {children}</AppContext.Provider>

}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }




