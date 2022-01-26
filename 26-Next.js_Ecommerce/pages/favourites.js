import { useGlobalContext } from "../components/Context";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import {formatPrice} from '../components/utils/helpers'

const Favourites = () => {

    const {favItems,uniqueFavItems,removeFavItem} = useGlobalContext();

    if (favItems.length!=0) {
        return (
            <div className="container">
                <h1>Favourite Products</h1>

            <div className="favs">
                {uniqueFavItems.map((i)=>{
                    const {id,image,title,price,description} = i;
                    return(
                        <div key={id} className="item">
                            <Link href={`/product/${id}`}><a className="link">
                            <img width={100} src={image} alt={title} />
                            <p>{description.substring(0,15)}...</p>
                            <p className="price">{formatPrice(price)}</p>
                            </a>
                            </Link>

                        <button className="remove-btn" onClick={()=>removeFavItem(id)} 
                            type="button"><AiFillDelete/></button>
                        </div>
                    )
                })}
             
            </div>

            <div className="btn-div">
                <Link href='/Products'><a className="css-button-3d--blue">Contunie Shopping</a></Link>
            </div>

            <style jsx>{`
                .container{
                    display:flex;
                    flex-direction:column;
                }
                h1{
                    margin:2rem;
                }
                .btn-div{
                    margin:2rem;
                }

                .favs{
                display:grid;
                grid-template-columns: repeat(3,1fr);
                grid-auto-rows: minmax(150px,300px);
                margin:1rem ;
                grid-gap:2rem;
                
                }
                .item{
                    background-color:#fff;
                    transition: all 0.3s;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    padding-bottom:1rem;
                    color:black;
                    border: 1px solid #eaeaea;

                }


                    .link{
                            cursor:pointer;
                        }
                    .link:hover{
                        color:#c2410c;
                        text-decoration:underline;
                    }
                    
                    .remove-btn{
                        background-color:#fff;
                        font-size:25px;
                        border:none;
                        margin-top:1rem;
                    }
                    .remove-btn:hover{
                        cursor:pointer;
                    }
                    .price{
                        font-weight:bold;
                        text-align:center;
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

                    @media screen and (max-width:768px){
                        .favs{
                        display:grid;
                        grid-template-columns: repeat(2,1fr);

                    }

                    }

                    @media screen and (max-width:500px){
                        .favs{
                        display:grid;
                        grid-template-columns: repeat(1,1fr);

                    }

                    }


                `}

                

                </style>
            </div>

        )
    }
    return (
        <div className="x">
     
        <div className="a">You dont have any favourite product</div>


        <div className="btn-div">
                <Link href='/Products'><a className="css-button-3d--blue">Go products</a></Link>
            </div>

        
        <style jsx>{`
            
            .x{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                align-self:center;
                margin:2rem;
            }
            .a{
                font-size:20px;
                letter-spacing:1px;
                font-weight:900;
                margin:1rem;
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

export default Favourites
