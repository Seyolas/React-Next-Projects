import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({stars,reviews}) => {
     const tempStars = Array.from({length:5},(_,index)=>{
     const number = index + 0.5;
        return (
          <p key={index}>
            {stars >=index+1 ? <BsStarFill/> : stars>= number ? <BsStarHalf/> : <BsStar/>}
          </p>
        )
      })

      return( 
          <div className="container">

        <div className="stars">{tempStars}</div>
        <p className='reviews'>({reviews} customer reviews)</p>
      <style jsx>{`

          .container{
            display:flex;
            align-items:center;
            
          }
          .stars{
              display:flex;
              color:#fbbf24;
             
          }
          
          `}
     </style>
     </div>

          
      )
}

export default Stars
