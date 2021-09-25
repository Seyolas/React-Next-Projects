import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [banana, setbanana] = useState([]);
  const [loading,setloading]=useState(true);
  const [Value, setValue] = useState(0);

  const fetchData = async ()=>{
    const data = await fetch(url);
    const response = await data.json();
    setbanana(response);
   setloading(false);
  }
 
  useEffect(() => {
   fetchData();
    
  },[])
 
  
  if (loading) {
    return <section className='section loading'>
 <h1>Loading...</h1>
    </section>
    
  }

  const { company, dates, duties, title } = banana[Value]

  return(
    
    <section>
      {banana.map((i,index)=>{
        return (
      <button key={i.id} onClick={() => setValue(index)}
      className={`job-btn ${index === Value && 'active-btn'}`}>
                {i.company}
              </button>
        )
      })}

 {/* // {job info} */}
 
      <article className='job-info'>
        <h3>{title}</h3>
        <h3>{company}</h3>
        <p className="job-date">{dates}</p>
      {duties.map((i,index)=>{
          return (

              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{i}</p>
              </div>
        )
      })}


      </article>

      <button type="button" className="btn">
        more info
      </button>
    </section>
   

    


  )

}

export default App
