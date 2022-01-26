import React, { useState } from 'react'
import { formatPrice } from './utils/helpers';
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';


const Electronics = ({data}) => {


    const [products,setProducts] = useState(data);

    let mostSeller = products.filter((item)=>item.category === "electronics")

    mostSeller = [...mostSeller,...mostSeller];



    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
    
    
   
    return (
        <section id='electronics-section'>

        <h2>Electronics</h2>
        
        <Carousel  breakPoints={breakPoints}>
        {mostSeller.map((item)=>{
                const {id,image,title,price} = item;
                        
                return (
                    <Link key={id} href={`/product/${id}`}>
                    <a className="item">
                        <img width={100} src={image} alt={title.substring(0,10)} />
                        <p>{title.substring(0,15)}</p>
                        <p>{formatPrice(price)}</p>
                        </a></Link>

                )
            })}

      </Carousel>


      <style jsx>{`
            
            section{
               
              border-top: 1px solid #eaeaea;

            }
            section h2{
                letter-spacing:1px;
                margin-left:10rem;
                margin-bottom:2rem;
                padding:1rem 0;

            }
                .item{
                    color:black;
                    cursor:pointer;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    align-self:center;
                    flex-direction:column;
                    width:200px;
                    max-width:200px;
                    height:220px;
                    max-height:220px;
                }
                .item:hover{
                    color:#c2410c;
                    text-decoration:underline;
                }
              

              @media screen and (max-width:500px){
                section h2{
                display:flex;
                align-items:center;
                justify-content:center;
                align-self:center;
                margin-left:0;
                margin-bottom:2rem;
                }

              }
                
                `}
                </style>

      </section>

                
    )
}

export default Electronics
