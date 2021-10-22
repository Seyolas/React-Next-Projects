import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const {id,name,job,image,text}=people[index];

  const checkNumber = (number)=>{
    if (number>people.length-1) {
      return 0 ;
    }
    if (number<0) {
      return people.length-1;
    }
    return number;
  }

const prevPerson = ()=>{
  setIndex((current)=>{
    return  checkNumber(current-1);
  });
}

const nextPerson = ()=>{
  setIndex((current)=>{
    return checkNumber(current+1);
  });
}

const randomPerson = ()=>{
  let x = Math.floor(Math.random() * people.length);
  if (x === index) {
    x=index+1;
  }
  setIndex(checkNumber(x));
}

  return(

    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>

      <h4 id={id} className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Suprise me!</button>



    </article>
   )

};

export default Review;
