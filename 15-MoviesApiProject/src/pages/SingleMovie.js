import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
const SingleMovie = () => {
   
    const { id } = useParams()
    const [singleMovie,setSingleMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const api = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_ACCESS_KEY}&i=${id}`

    // Title,Year,Relased,Runtime,Writer,Plot
    const fetchSingleMovie = async (api)=>{
       
        setLoading(true);
        const data = await fetch(api);
        const response = await data.json();
        setSingleMovie(response);
        setLoading(false);
        
    }

    useEffect(() => {
        fetchSingleMovie(api);
        

    }, [])

    if (loading) {
        return   <div className="loading"></div>
    }

    // if (errPage) {
    //    return <Error/>
    // }

    return (
        <div className="single-movie-container">
            <div className="left-area">
            <img className='single-img' src={singleMovie.Poster} alt="" />
            </div>
            <div className="right-area">
                <p className='text text-title'>{singleMovie.Title}</p>
                <p className='text'> {singleMovie.Plot}</p>
                <p className='text'>Runtime : {singleMovie.Runtime}</p>
                <p className='text'>Writer : {singleMovie.Writer}</p>
                <p className='text'>Released : {singleMovie.Released}</p>
                <Link className='back-movie-link' to='/'>Back to movies</Link>
            </div>

        </div>
    )
}

export default SingleMovie