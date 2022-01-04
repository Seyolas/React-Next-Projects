import Link from 'next/link';

const Navmenu = () => {
    return (
        <header className='nav-menu'>
                <Link href='#women-section'><a>Women</a></Link>
                <Link href='#men-section'><a>Men</a></Link>
                <Link href='#jewelery-section'><a>Jewelery</a></Link>
                <Link href='#electronics-section'><a>Electronics</a></Link>



                <style jsx>{`
                header{
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    border-bottom: 1px solid #eaeaea;
                    background-color:#e0f2fe;
                    height:50px;

                }
                header a{
                    color:black;
                    letter-spacing:1px;
                }

                @media screen and (max-width:768px){
                    .nav-menu{
                        display:none;
                    }
                }


                    `}

                </style>
        </header>
    )
}

export default Navmenu
