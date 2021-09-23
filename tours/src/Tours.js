import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return(

    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
  
      <div>
        {tours.map((i)=>{
          return <Tour key={i.id}{...i} removeTour={removeTour}></Tour>
        })}
      </div>

    </section>
  )

};

export default Tours;
