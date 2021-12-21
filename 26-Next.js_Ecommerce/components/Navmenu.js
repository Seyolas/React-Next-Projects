import Link from 'next/link';

const Navmenu = () => {
    return (
        <header>
                <Link href='/'><a>Women</a></Link>
                <Link href='/'><a>Men</a></Link>
                <Link href='/'><a>Jewelery</a></Link>
                <Link href='/'><a>Electronics</a></Link>



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
                    `}

                </style>
        </header>
    )
}

export default Navmenu
