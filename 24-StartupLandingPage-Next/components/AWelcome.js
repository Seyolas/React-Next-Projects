import React from 'react'

const AWelcome = () => {
    return (
       <section className='first-container'>
         <div className="first-container-left">
           <h1>Build your audience & grow your business online smarter</h1>
           <p>Get your blood tests delivered at let home collect 
             sample from the victory of the managements that 
             supplies best design system guidelines ever.</p>
             <form action="https://formspree.io/f/xoqyggep" method="POST">
               <input name="_replyto" type="email" placeholder='Enter Email address' />
               <span><button type='submit'>Subscribe</button></span>
             </form>
             <div className="sponsors">
               <span>Sponsered by :</span>
               <img src="/paypal.png" alt="paypal" />
               <img src="/google.png" alt="google" />
               <img src="/dropbox.png" alt="dropbox" />
             </div>
         </div>
         
          <div className="first-container-right">
            <img src="workingkeko.png" alt="work" height={480} />
          </div>


         <style jsx>{`
        .first-container{
          display:flex;
          width:80vw;
          margin:0 auto;
          margin-top:6rem;
        }
        .first-container-left{
          display:flex;
          flex-direction: column;
          width:45vw;
          padding:1rem;
          
        }
        .first-container-left h1{
         font-size: 58px;
         font-weight:bolder;
        }
        .first-container-left p{
         text-align:left;
         font-size:large;
         width:400px;
         margin:1rem 0;
         margin-bottom:2rem;
         line-height:30px;
        }
        .first-container input{
          width:380px;
          height:55px;
          background-color:#F3F4F6;
          padding:1rem;
          border:none;
          border-radius:2px;
        }
        .first-container input:focus{
          outline: solid 3px #DB4A87;
        }
        .first-container button{
          height:55px;
          width:9vw;
          margin-left:1rem;
          border-radius:5px;
          color:#fff;
          font-weight:900;
          font-size:medium;
          outline:none;
          border:none;
          transition: all 0.3s;
          background-color:#DB4A87;
          cursor:pointer;
        }
        .first-container button:hover{
          background-color:black;
        }
        .sponsors{
          margin-top:2rem;
        }
        .sponsors span{
          color:#6B7280;
          position:relative;
          bottom:8px;
          margin-right:10px;
          font-weight:500;
        }
        .sponsors img{
          margin:0 0.5rem;
        }


        `}

      </style>
       </section>
    )
}

export default AWelcome
