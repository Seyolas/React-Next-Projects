import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import { BiCart} from "react-icons/bi";
import { BsFillSuitHeartFill} from "react-icons/bs";
import { AiOutlineUser} from "react-icons/ai";
import { FiLogOut, FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context';
const Navbar = () => {
    const { user, error, isLoading } = useUser();
    
    const [sidebar,setSidebar] = useState(false);
    const [search,setSearch] = useState();
    const [results,setResults] = useState();
    
    const {fav} = useGlobalContext();

    const openSideMenu = ()=>{
        setSidebar(true);
    }
    const closeSidebar = ()=>{
        setSidebar(false);
    }

    const handleSearch = (e)=>{
        e.preventDefault();
        const query = e.target.value;
        if (query) {
        setSearch(e.target.value);
        }
        
        console.log(search);
    }

    return (
        <nav>
            <button onClick={openSideMenu} className='menu-bar'><FiAlignJustify /></button>
             <aside className={`${sidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
             <div className='sidebar-header'>
              <Link href="/"><a><img width={100}  src='/logo.svg' className='logox' alt='logo' /></a></Link> 
               <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
            </div>
            <ul className='sidebar-ul'>

            {user ? <a href="/api/auth/logout"><FiLogOut/>Logout</a>:<a href="/api/auth/login"><AiOutlineUser/>Login</a> }
            {user && <p>Welcome {user.name}!</p>}
                <Link href='/'><a>Women</a></Link>
                <Link href='/'><a>Men</a></Link>
                <Link href='/'><a>Jewelery</a></Link>
                <Link href='/'><a>Electronics</a></Link>
            </ul>
            </aside>
            
           <Link href='/'><a><img className='logo' src="/logo.svg"  alt="logo" /></a></Link> 
            <ul className='general-ul'>
            <input type="search" onChange={(e)=>handleSearch(e)} value={search} placeholder="Search"/>
                <ul className='small-ul'>
                <li><BsFillSuitHeartFill/><span>{fav}</span></li>
                    <li><BiCart/><span>3</span></li> 
                </ul>
              
            </ul>

            {user ? <a className='logout-link' href="/api/auth/logout"><FiLogOut/>Logout</a>:<a className='login-link' href="/api/auth/login"><AiOutlineUser/>Login</a> }
            {user && <p className='welcome-p'>Welcome {user.name}!</p>}
            

          

            <style jsx>{`

            .sidebar {
                position: fixed;
                top: 0;
                left: 0;
                width: auto;
                height: 100%;
                background-color:#f3f4f6;
                display: grid;
                grid-template-rows: auto 1fr auto;
                grid-gap:1rem;
                transition: all 0.3s linear;
                transform: translate(-100%);

                }

                .show-sidebar {
                transform: translate(0);
                }

                @media screen and (min-width: 676px) {
                .sidebar {
                    width: 400px;
                }
                }
                
                .sidebar-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 1.5rem;
                }
                .close-btn {
                font-size: 1.75rem;
                background: transparent;
                border-color: transparent;
                transition:all 0.3s linear;
                color:#b91c1c;
                cursor: pointer;
                margin-top: 0.2rem;
                }

                .sidebar-ul{
                    display:flex;
                    flex-direction:column;
                    padding:1rem;

                }
                .sidebar-ul a{
                    margin:1rem;
                    letter-spacing:1px;
                }
                .sidebar-ul a:hover{
                    font-weight:bolder;
                }
                .menu-bar{
                    font-size:25px;
                    border:none;
                    background-color:#fff;
                    display:none;
                    margin:0 1rem;
                    margin-left:2rem;
                    cursor:pointer;
                }
                .menu-bar:hover{
                    color:red;
                }
                .logo {
                    width:90px;
                }
                nav{
                    
                    display:flex;
                    justify-content:space-evenly;
                    align-items:center;
                    font-size:large;
                    border-bottom: 1px solid #eaeaea;
                    padding-top:1rem;
                }
                .general-ul{
                    display:flex;
                    align-items:center;
                }
                .small-ul{
                    display:flex;
                    align-items:center;
                    margin-left:4rem;
                }
                .small-ul li{
                    margin:0 1rem;
                }
               
                nav a{
                    color:black;
                }

             
            input {
                outline: none;
            }

            input[type=search] {
                -webkit-appearance: textfield;
                -webkit-box-sizing: content-box;
                font-family: inherit;
                font-size: 100%;
            }
            input::-webkit-search-decoration,
            input::-webkit-search-cancel-button {
                display: none; 
            }
            input[type=search] {
                padding: 9px 10px 9px 32px;
                width: 30vw;
                background: url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
                border: solid 1px #ccc;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                transition: all .5s;
            }
            input[type=search]:focus {
                width: 35vw;
                background-color: #fff;
                border-color: black;
                -webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
                -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
                box-shadow: 0 0 5px rgba(109,207,246,.5);
            }

            @media screen and (max-width:768px){
                .menu-bar{
                    border:none;
                    background-color:#fff;
                    display:block;
                }
                .logo {
                    display:none;
                }
                .login-link{
                    display:none;
                }
                .logout-link{
                    display:none;
                }
                .welcome-p{
                    display:none;
                }

            }
            @media screen and (max-width:500px){
              .menu-bar{
                    margin:0 1rem;
                    margin-left:1rem;
              }
                .small-ul{
                    display:flex;
                    align-items:center;
                    margin-left:1rem;
                }
                .small-ul li{
                    margin:0 0.2rem;
                }
               
                input[type=search] {
                padding: 9px 10px 9px 32px;
                width: 35vw;
                background: url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
                border: solid 1px #ccc;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                transition: all .5s;
            }
               

            }

                
                `}

            </style>
        </nav>
    )
}

export default Navbar
