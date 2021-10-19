import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context'
const url_photo ='https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const Movies = () => {
    const {id}=useParams();
  
    const {loading,movies} = useGlobalContext();

    if (loading) {
        return   <div className="loading"></div>
    }
    return (

        <section id='structure'>
        {movies.map((i)=>{
            const {Poster,Title,imdbID} = i;
            return( 
         
            <Link to={`/${imdbID}`} className='item' key={imdbID}> 
            <img src={Poster ==='N/A' ? url_photo : Poster } alt={Title} />

            </Link>
            )

        })}
        </section>
    )
}

export default Movies
