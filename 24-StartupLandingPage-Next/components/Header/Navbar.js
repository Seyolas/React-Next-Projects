import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [shadow,setShadow] = useState(false);
    useEffect(() => {
       const onScroll= ()=> {
        window.scrollY >10 ? setShadow(true) : setShadow(false)
    
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll",null);
          }
    }, [])

    
    return (
    
    <nav className={shadow ? 'shadow-active':null}>
      
      <div>
        <ul className='ul-first'>
        <img src="/consolan.svg" alt="" width={100} height={90} />
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/'><a>Services</a></Link></li>
            <li><Link href='/'><a>Features</a></Link></li>
            <li><Link href='/'><a>Blog</a></Link></li>
        </ul>
        </div>
      
        <div>
            <ul className='ul-second'>
                <li><Link href='/'><a>Login</a></Link></li>
                <li className='get-started'>Get Started</li>
            </ul>
        </div>

        
        <style jsx>{`
            nav{
                position:fixed;
                top:0;
                background-color:white;
                width:100vw;
                max-width:100%;
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:0 10%;
                transition:all 0.7s;
            }
            .shadow-active{
                box-shadow: rgba(0, 0, 0, 0.45) 0px 15px 15px -20px;
            }

            .ul-first{
                display:flex;
                align-items:center;
            }
            .ul-first li{
                margin:0 1rem;
            }
            .ul-first img{
                margin-right:2rem;
            }
            .ul-second{
                display:flex;
                align-items:center;
            }
            .ul-second li{
                margin:0 1rem;
            }
            .get-started{
                font-weight:800;
                color:rgb(219, 74, 135);
            }
            `}

        </style>

    </nav>
    )
}

export default Navbar
