import React, {useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './context'
import Questions from './Questions';
const App = () => {
  
  const {number,setNumber,DifficultyValues,CategoryValues,
    handleChange,handleChangeTwo,handleClick,loading,setLoading,result,
  myError,setmyError} = useGlobalContext();


    if (loading) {
      return <div className="loading"></div>
    }

   if (result.length!==0) {
     return <Questions/>
   }

   return (
    <>
     <section className="cart">
       <article className="flex-area">
        <h2>Setup Quiz</h2>
        {/* {console.log(result)} */}
        <div className="select-number">
          <p>Number Of Questions</p>
          <input value={number} onChange={(e)=>setNumber(e.target.value)}  type="number" />
        </div>

        <div className="select-category">
          <p>Category</p>
          <select onChange={handleChangeTwo}  id="categories">
          {CategoryValues.map((i,index)=>{
          return <option value={i} key={index}>{i}</option>
          })}
          </select>
        </div>
    
        <div className="select-difficulty">
          <p>Select Difficulty</p>
        <select onChange={handleChange}  id="difficulties">
          {DifficultyValues.map((i,index)=>{
            return <option value={i} key={index}>{i}</option>
          })}
          </select>
        </div>
        <p className='error-show'>{myError && "Can't Generate Questions, Please Try Different Options" }</p>
        <button onClick={handleClick} className='start-btn'>Start</button>
       </article>
     </section>
    </>
  )



}



export default App