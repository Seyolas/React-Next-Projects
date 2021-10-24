import React, { useState } from 'react'
import { useGlobalContext } from './context'
import Modal from './Modal';
const Questions = () => {

    const {openModal,setopenModal,result,index,setIndex,correct,setCorrect} = useGlobalContext();

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


     const nextQuestion = ()=>{
        setIndex((current)=>current+1);

        if (index===result.length-1) {
            setopenModal(true);
            setIndex(0);
        }

     }
    

     const CheckAnswer = (e,correct_answer)=>{

        e.preventDefault();
        const buttonText = e.target.textContent;
      
        if (buttonText == correct_answer) {
            setCorrect((current)=>current+1)
            nextQuestion();

            // setIndex((current)=>current+1)
        }
        else{
            // setIndex((current)=>current+1)
            nextQuestion();

        }
        

     }

  


     const {question,correct_answer,incorrect_answers} = result[index];
     const answers =[...incorrect_answers,correct_answer];
     let mixedAnswers=shakeAndBakeAnswers(answers);
    return (
        <>
        {openModal ? <Modal/>:null}
        <article  id='single-question'>
            <div className="content">
                <p className='detail'>{`Correct Answers:${correct} / ${index}`}</p>
          <h1 dangerouslySetInnerHTML={{ __html: question }} />
            <div className="container-buttons">
                {mixedAnswers.map((i)=>{
                    return <button onClick={(event)=>CheckAnswer(event,correct_answer)} className='answers' dangerouslySetInnerHTML={{ __html: i }} type='button'/>
                })}
            </div>
            <button onClick={nextQuestion} className="next-question">Skip The Question</button>
            </div>
        </article>
        </>
    )
}

export default Questions
