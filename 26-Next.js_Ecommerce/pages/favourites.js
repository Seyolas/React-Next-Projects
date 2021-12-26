import { useGlobalContext } from "../components/Context";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import React from "react";


const favourites = () => {

    const {favItems,uniqueFavItems,removeItem} = useGlobalContext();

    if (favItems.length!=0) {
        return (
            <div>
                {uniqueFavItems.map((i)=>{
                    const {id,image,title,price,description} = i;
                    return(
                     <div key={id}>
                        <img width={70} src={image} alt={title} />
                        <p>{price}</p>
                        <p>{description}</p>
                        <button className="remove-btn" onClick={()=>removeItem(id)} type="button"><AiFillDelete/></button>
                    </div>  
                    )
                })}
                <Link href='/products'><a className="css-button-3d--blue">Products</a></Link>

                <style jsx>{`
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
    return <div>You dont have any favourite product kekw <Link href='/products'><a>Go products</a></Link></div>
}

export default favourites
