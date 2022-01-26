import Stars from "../../components/Stars";
import { BsFillSuitHeartFill} from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../components/Context";
import Link from "next/link";
import {useRouter} from "next/router"

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


const Singleproduct = ({product}) => {

    const [fakeAdet,setFakeAdet] = useState(1);

    const {user, error, isLoading,setFavitems,setBasketItems} = useGlobalContext();

    let newProduct = {...product,quantity:fakeAdet}
    const {id,title,price,description,category,image,rating:{rate,count},quantity} = newProduct;
    
    const router = useRouter();


    const updateAdet = (e)=>{
        let x = e.target.value;
        setFakeAdet(Number(x));

      }
      
     

    const notify = () => toast('Succesfuly added to favourites');
    const notifybasket = ()=>toast('Succesfully added to the basket');


    const AddFavourities = (e)=>{
        e.preventDefault();  
        if (user) {
            notify();
            let item = {id,image,title,price,description};
            setFavitems(prevState=> [...prevState,item])    
        }
        else {
            router.push('/api/auth/login')
        }
       
    }

    const AddBasket = (e)=>{
        e.preventDefault();  
        if (user) {
            notifybasket();
            let item = {id,image,title,price,description,quantity};
            setBasketItems(prevState=> [...prevState,item])    
        }
        else {
            router.push('/api/auth/login')
        }
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
        <button type="button" title='Basket' className="css-button-3d--blue" 
        onClick={(e,id,image,title,price,description,quantity) => 
        {AddBasket(e,id,image,title,price,description,quantity)}}>Add to basket</button>

        <button type="button" title='Add to favourities' className="favourite"
        onClick={(e,id,image,title,price,description) => 
        {AddFavourities(e,id,image,title,price,description)}}>
        <BsFillSuitHeartFill/></button>
        
      <select className="select" value={fakeAdet} onChange={(e)=>updateAdet(e)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>

                </select>
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
             </div>
            
           </div>

            <style jsx>{`

            .css-button-3d--blue {
                min-width: 230px;
                height: 40px;
                color: #fff;
                padding: 5px 10px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;
                outline: none;
                border-radius: 5px;
                border: none;
                background: #fbbf24;
                box-shadow: 0 5px #f59e0b;
                }
                .css-button-3d--blue:hover {
                box-shadow: 0 3px #f59e0b;
                top: 1px;
                }
                .css-button-3d--blue:active {
                box-shadow: 0 0 #f59e0b;
                top: 5px;
                }

                .container{
                    display:flex;
                    width:80vw;
                    margin:4rem auto;
                    height:70vh;

                }
                .button-container{
                    margin:1rem 0;
                    display:flex;
                    align-items:center;
                    
                }
                .select{
                    margin-left:1rem;
                    height: 40px;
                     padding: 5px 10px;
                    margin-left:2rem;
                    font-weight:700;
                }
                .left{
                    margin-right:4rem;                    
                }
                .right{
                    letter-spacing:1px;
                    width:40vw;

                }
                .title{
                    font-weight:bold;
                    font-size:2rem;
                }
                .price{
                    font-weight:bold;
                    font-size:1.4rem;
                }
              
                
                .favourite{
                    background-color:#fff;
                     height: 40px;
                     padding: 5px 10px;
                    margin-left:2rem;
                    cursor:pointer;     
                    border:solid 1px #eaeaea;               
                }

                img{
                    width:300px;
                    object-fit:contain;

                }

                @media screen and (max-width:900px){
                    .container{
                    height:fit-content;
                }
                
                }
                @media screen and (max-width:500px){

                    .container{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    width:100vw;
                    margin:4rem auto;
                    
                }
                .left{
                    margin-right:0;      
                }
                .right{
                    letter-spacing:1px;
                    width:80vw;

                }
              
                
                .favourite{
                    background-color:#fff;
                    padding:0.5rem 0.3rem;
                    margin-left:1rem;
                    cursor:pointer;                    
                }

                img{
                    width:150px;
                    object-fit:contain;
                }

            }
                
                
                `}

            </style>
        </div>
    )
}

export default Singleproduct
