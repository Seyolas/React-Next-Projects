
import Link from 'next/link'
const Header1 = () => {
  return (
    <div className='container'>
      
      <div className="left">
        <h1>Best ecommerce website ever</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Modi rem, non enim incidunt necessitatibus doloremque id totam quisquam dolore nobis?</p>
          <Link href='/products'><a className='btn'>Discover More</a></Link>
      </div>
      
      <img  src="https://dfcdn.defacto.com.tr/Mobile/3lu-1437x2100_d8fc0130-9c72-490c-bdcd-33a155784edb_8b7a86fd-241f-4e56-bc51-299e257d681d_DI_308.jpg" alt="slide" />

    <style jsx>{`
      .container{
        display:flex;
        width:100vw;
        max-width:100%;
        margin:1rem auto;
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .left{
        width:30vw;
        display:flex;
        flex-direction:column;
        margin-top:2rem;
      }
      .left p{
        line-height:30px;
      }
      .btn{
        margin-top:1rem;
        background-color:#2563eb;
        color:#fff;
        padding:1rem 2rem;
        width:fit-content;
        border-radius:10px;
      }
      img{
        width:500px;
        height:600px;
        object-fit:cover;
        border-radius:10px;
      }

      @media screen and (max-width:500px){
        .container{
        display:flex;
        width:100vw;
        max-width:100%;
        margin:1rem auto;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
      }
      .left{
        width:80vw;
        display:flex;
        flex-direction:column;
        margin-top:2rem;
      }
      .btn{
       margin:1rem auto;
        padding:0.5rem 1rem;
        width:fit-content;
        border-radius:10px;
      }
      img{
        width:300px;
        height:400px;
        object-fit:cover;
        border-radius:10px;
      }

      }

      `}


    </style>
    </div>
  )
}

export default Header1
