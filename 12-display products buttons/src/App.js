import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {

  const {loading,data} = useFetch();
  const [page,setPage]= useState(2);
  const [followers,setFollowers]=useState([]);

  console.log(data);

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading,page])

  const handleChange=(index)=>{
    setPage(index);
  }

  const prevPage = ()=>{
    setPage((current)=>{
      let prevPage=current-1;
      if (prevPage < 0) {
        prevPage=data.length-1;
      }
      return prevPage
    })
  }

  const nextPage=()=>{
    setPage((current)=>{
      let nextPage=current+1;
      if (nextPage > data.length-1) {
        nextPage=0;
      }
      return nextPage
    })
  }
  return (

    <main>

      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((i)=>{
            return <Follower key={i.id} {...i} />
          })}
        </div>

        {!loading &&(
          <div className="btn-container">
            <button onClick={prevPage} className="prev-btn">prev</button>
            {data.map((item,index)=>{
              return (
                <button onClick={()=>handleChange(index)} key={index}
                 className={`page-btn ${index===page ? 'active-btn':null}`}>{index+1}</button>
              )
            })}

          <button onClick={nextPage} className="next-btn">next</button>

          </div>
        )}
      </section>


    </main>
  )
}

export default App
