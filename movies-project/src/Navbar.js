import React from 'react'
import {Link} from "react-router-dom";
import { useGlobalContext } from './context'

const Navbar = () => {
  const {alert,setAlert,query,setQuery} = useGlobalContext();

  const handleChange = (e)=>{
    e.preventDefault();
    setQuery(e.target.value);
  }
    return (
    <nav id='navbar'>

          <ul className='navbar-items'>
          
          <div>
          <h1>Search Movies</h1>
          <input type="text" value={query} onChange={handleChange} placeholder='Search Movie' />
          <div className='alert'>{alert.show && alert.msg}</div>
          </div>
            <div className='right-links'>
            <Link className='link' to = '/'>Home</Link>
            <Link className='link' to = '/about'>About</Link>
            </div>
          </ul>

    </nav>
    )
}

export default Navbar
