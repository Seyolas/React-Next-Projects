import { useGlobalContext } from "../components/Context"
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { formatPrice } from "../components/utils/helpers";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";


const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };
  


const Basket = () => {

    const {basketItems,uniqueBasketItems,removeBasketItem} = useGlobalContext();      
 


    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
      refAnimationInstance.current = instance;
    }, []);
  
    const makeShot = useCallback((particleRatio, opts) => {
      refAnimationInstance.current &&
        refAnimationInstance.current({
          ...opts,
          origin: { y: 0.7 },
          particleCount: Math.floor(200 * particleRatio)
        });
    }, []);
  
    const fire = useCallback(() => {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55
      });
  
      makeShot(0.2, {
        spread: 60
      });
  
      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
  
      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
  
      makeShot(0.1, {
        spread: 120,
        startVelocity: 45
      });
    }, [makeShot]);
  
    let amount = 0;

   
    if (basketItems.length!=0) {
        return (
          <div className="container">

          <div className="table">
             <div><h5>item</h5></div> 
             <div><h5>price</h5></div> 
             <div><h5>quantity</h5></div> 
             <div><h5>subtotal</h5></div> 
             <div><span></span></div> 
          </div>
          
             {uniqueBasketItems.map((item)=>{
            const {id,image,title,price,description,quantity} = item;
            let itemPrice = formatPrice(Number(price) * Number(quantity))
             amount = Number(amount+itemPrice);
             console.log(amount);
            return (
              <div key={id} className="item">

                <div className="first-col">
                <div><img className="image" src={image} alt={title} /></div>
                <div>{title.substring(0,10)}</div>
                </div>
                <div>{formatPrice(price)}</div>
                <div>
               <p>{quantity}</p>
                </div>
                <div>{formatPrice(price * Number(quantity))}</div>
                <div><button className="remove-btn" onClick={()=>removeBasketItem(id)} type="button"><AiFillDelete/></button></div>

              </div>
            )

             })}
           { <div className="btn-div">
            <button className="css-button-3d--blue"><Link href='/Products'><a>Continue Shopping</a></Link></button>
                <button className="css-button-3d--blue" onClick={fire}>Proceed to checkout</button>
                <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
            </div>
               }
          <style jsx>{`
            .remove-btn{
              background-color:#fff;
              font-size:20px;
              border:none;
              outline:none;
              cursor:pointer;
            }
            .image{
              width:40px;
            }
            .btn-div{
              display:flex;
              justify-content:space-around;
              align-items:center;
              margin:1rem;
            }
            .btn-div a{
              color:#fff;
            }
          .css-button-3d--blue {
               text-align:center;
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
              width:80%;
              max-width:80%;
              display:flex;
              flex-direction:column;
              margin:2rem auto;
              min-height:600px;
              max-height:auto;
            }
            .table{
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(5,minmax(200px,auto));
              grid-template-rows: minmax(30px,auto);
              align-items:center; 
              justify-content:center;
              grid-gap: 1rem;
            }
            .table>*{
              text-align:center;

            }
            .item{
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(5,minmax(200px,auto));
              align-items:center;
              justify-content:center;
              grid-template-rows: minmax(150px,auto);
              grid-gap: 1rem;
              border-bottom: 1px solid #eaeaea;

            }
            .item>*{
              font-weight:900;
              text-align:center;
            }
            
            
            @media screen and (max-width:1200px){
              
              .image{
              width:30px;
            }
              .table{
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(5,minmax(70px,170px));
              grid-template-rows: minmax(30px,auto);
              align-items:center; 
              grid-gap:0.3rem;
              }

              .item{
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(5,minmax(70px,170px));
              align-items:center;
              grid-template-rows: minmax(130px,auto);
              grid-gap: 0.3rem;
            }

            }
            
            @media screen and (max-width:500px){
              .css-button-3d--blue {
                min-width: 50px;
                margin:0.5rem;

              }

              
              .image{
              width:20px;
            }
              .table{
              grid-template-columns: repeat(5,minmax(30px,75px));
              grid-template-rows: minmax(30px,auto);
              grid-gap:0;
              }

              .item{
              grid-template-columns: repeat(5,minmax(30px,75px));
              grid-template-rows: minmax(130px,auto);
              grid-gap:0;
            }


            }


            `}

          </style>

          </div>
        )
    }




    return (
      <div className="x">
   
      <div className="a">Your basket is empty</div>


      <div className="btn-div">
              <Link href='/Products'><a className="css-button-3d--blue">Fill it</a></Link>
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
                      min-width: 150px;
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

export default Basket


              



          
                