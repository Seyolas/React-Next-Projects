import React, { useState } from 'react'
import { useGlobalContext } from './context'
import { useRef } from 'react';
const Questions = () => {

    const {result,index,setIndex} = useGlobalContext();

    console.log(result);

    const shakeAndBakeAnswers = (array)=>{
    
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

    return array;
     }

  

     const [alert,setAlert] = useState(false);

     const {question,correct_answer,incorrect_answers} = result[index];
     const answers =[...incorrect_answers,correct_answer];
     let mixedAnswers=shakeAndBakeAnswers(answers);

     console.log(result[0]);


    return (
        <article id='single-question'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
            
            <div className="container-buttons">
                {mixedAnswers.map((i)=>{
                    return <button className='answers' dangerouslySetInnerHTML={{ __html: i }} type='button'/>
                })}
            </div>
        </article>
    )
}

export default Questions
