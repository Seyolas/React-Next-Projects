import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav id='nav'>
            <div className='logo'>
                <Image className='x' src='/mcdonals.png' width={100} height={60} />
            </div>
            <div className="links">
            <Link href ='/'>Home</Link>
            <Link href ='/about'>About</Link>
            <Link href ='/ninjas'>Ninjas List</Link>
            </div>
        </nav>


     );
}
 
export default Navbar;