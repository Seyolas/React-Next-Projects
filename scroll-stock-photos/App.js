import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const clientID= `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [query,setQuery] = useState('');
  const [loading,setLoading] = useState(false);
  const [photos,setPhotos] = useState([]);
  const [page,setPage] = useState(1);

  const fetchData = async ()=>{
  setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `$query=${query}`

    if (query) {
      url=`${searchUrl}${clientID}${page}${urlQuery}`
    }
    else{
    url = `${mainUrl}${clientID}${urlPage}`
    }
      
    try {
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((current)=>{
        if (query && page===1) {
          return data.results;
        }
        
        else if (query) {
          return [...current, ...data.results]
        }

        else {
          return [...current, ...data];
        }
      });
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }

  }

  useEffect(() => {
    fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [page])

  useEffect(() => {
    const event = window.addEventListener('scroll',()=>{
      // console.log(`innerHeight ${window.innerHeight}`)
      // console.log(`scrollY ${window.scrollY}`)
      // console.log(`Body height ${document.body.scrollHeight}`)
      if ((!loading && window.innerHeight+window.scrollY) >= document.body.scrollHeight-2) {
        setPage((current)=>{
          current+=1;
          if (current===10) {
            current=0;
          }
          return current;
        })
      }

    })

    return () => window.removeEventListener('scroll',event);
  }, [])


  const handleSubmit=(e)=>{
    e.preventDefault();
    setPage(1);
    fetchData();
  }

  return( <main>
    <section className="search">
      <form className="search-form">
        <input type="text" placeholder='search photo' className='form-input'
        value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button type='submit' onClick={handleSubmit} className='submit-btn' ><FaSearch/></button>
      </form>
    </section>
    <section className="photos">
      <div className="photos-center">
      {photos.map((i)=>{
        return <Photo key={i.id} {...i}/>;
      })}
      </div>
      {loading && <h2 className='loading'> Loading ... </h2>}
    </section>
  </main>
  )
}

export default App
