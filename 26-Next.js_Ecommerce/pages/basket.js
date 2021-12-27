import { useGlobalContext } from "../components/Context"
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { formatPrice } from "../components/utils/helpers";
const basket = () => {

    const {basketItems,uniqueBasketItems,removeBasketItem} = useGlobalContext();
   
    if (basketItems.length!=0) {
        return (
            <div>
                {uniqueBasketItems.map((i)=>{
                    const {id,image,title,price,description} = i;
                    return(
                     <div className="container" key={id}>
                        <img width={70} src={image} alt={title} />
                        <p>{formatPrice(price)}</p>
                        <p>{description}</p>
                        <button className="remove-btn" onClick={()=>removeBasketItem(id)} 
                        type="button"><AiFillDelete/></button>
                    </div>  
                    )
                })}
                <Link href='/products'><a className="css-button-3d--blue">Continue Shopping</a></Link>
                <Link href='/'><a className="css-button-3d--blue">Proceed to checkout</a></Link>

                <style jsx>{`

                    .container{
                        width:30vw;
                        text-align:center;
                        margin:2rem auto;
                        display:flex;
                    }

                    .remove-btn{
                        background-color:#fff;
                        font-size:15px;
                        border:none;

                    }
                    
                    
            .css-button-3d--blue {
                min-width: 230px;
                text-align:center;
                display:flex;
                align-items:center;
                justify-content:center;
                align-self:center;
                margin:0 auto;
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
                    
                    `}

                </style>
            </div>
        )
    }

    return <div>You dont have any product in your basket KEKW <Link href='/products'><a>Go products</a></Link></div>

}

export default basket
