import React from 'react'
import { useLocation , Link } from 'react-router-dom'
const Navbar = () => {

    const location = useLocation();
  console.log(location.pathname);
    return (
        <>
        <header id='header'>
             <Link to='/'><h1>Wishmaker Films</h1></Link>  
            </header>

            <nav id='nav'>
            <Link className={location.pathname==='/' ? 'nav-link-current': 'nav-link'} to='/'>Home</Link>
            <Link className={location.pathname==='/videos' ? 'nav-link-current': 'nav-link'} to='/videos'>Videos</Link>
            </nav>
        </>
    )
}

export default Navbar
