import Stars from "../../components/Stars";
import { BsFillSuitHeartFill} from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { useGlobalContext } from "../../components/Context";

export const getStaticPaths = async ()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    const paths = data.map(i=>{
        return {
            params: {id: i.id.toString()}
        }
    })
 
    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch('https://fakestoreapi.com/products/'+id);
    const data = await res.json();

    return {props:{product:data}}
}


const singleproduct = ({product}) => {
    const {id,title,price,description,category,image,rating:{rate,count}} = product;
    const notify = () => toast('Succesfuly added to favourities');

     const {fav,setFav} = useGlobalContext();
     console.log(fav);   
    const handleClick = (e)=>{

        return setFav((current)=>current+1)
        
    }
    return (
        <div className="container" key={id}>
            <div className="left">
                <img src={image} alt={title} />
            </div>
           
           <div className="right">
             <p className="title">{title}</p>
             <Stars stars={rate} reviews={count}/>
             <p className="price">$ {price}</p>
             <p className="description">{description}</p>
             
             <div className="button-container">
                <button type="button" className="buy">Buy</button>
                <button type="button"  title='Add to favourities' onClick={(e) => { notify(); handleClick(e)}} className="favourite"><BsFillSuitHeartFill/></button>
                <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        backgroundColor:'#22c55e',
                        color:'#fff',
                        fontSize:'15px',
                        
                    },
                }}
                />
                <p>Share it with : a b c</p>
             </div>

           </div>

            <style jsx>{`

                .container{
                    display:flex;
                    width:80vw;
                    margin:4rem auto;
                }
                .left{
                    margin-right:4rem;                    
                }
                .right{
                    letter-spacing:1px;

                }
                .title{
                    font-weight:bold;
                    font-size:2rem;
                }
                .price{
                    font-weight:bold;
                    font-size:1.4rem;
                }
                .buy{
                    width:20vw;
                    border:none;
                    outline:none;
                    cursor:pointer;
                    padding:0.5rem 0.3rem;
                    font-size:1rem;
                    background-color:#fbbf24;
                }
                .buy:hover{
                    border:solid 1px black;
                }
                .favourite{
                    background-color:#fff;
                    padding:0.5rem 0.3rem;
                    margin-left:2rem;
                    cursor:pointer;                    
                }

                img{
                    width:300px;
                    object-fit:contain;

                }
                
                
                `}

            </style>
        </div>
    )
}

export default singleproduct
