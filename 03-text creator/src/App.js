import React, { useState } from 'react';
import data from './data';

function App() {

  const [Text,setText] = useState([]);
  const [count,setCount] = useState(0);


  const handleSubmit = (e)=>{
    e.preventDefault();
   setText(data);

   let numberValue= parseInt(count);
   if (numberValue>8) {
    numberValue=8;     
   }
   if (numberValue<=0) {
     numberValue=1;
   }

   setText(data.slice(0,numberValue));


  }
  
  return (
 <section className='section-center'>
   <h3>Tired of lorem ipsum ? </h3>

   <form className="lorem-form" onSubmit={handleSubmit}>
    <label htmlFor="">değer gir :</label>
    <input type="number" name='value' value={count}  onChange={(e)=>setCount(e.target.value)}/>
    <button type='submit' className='btn'>Generate</button>
   </form>

    <article className='lorem-text'>
      {Text.map((i,index)=>{
        return <p key={index}>{i}</p>
      })}
    </article>
  


 </section>

    )

}

export default App;
