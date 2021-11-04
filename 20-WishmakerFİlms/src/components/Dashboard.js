import React from 'react'
import Slide from './Slide'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import { HiArrowCircleRight } from "react-icons/hi";
import Navbar from './Navbar';

const Dashboard = () => {
    const {card} = useGlobalContext();

    console.log(card);

    return (
        <>
          <Navbar/>
           
            {/* Welcome Intro */}
            <section className="welcome-section">
                <div className='left'>
                    <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/Godaddy%20main.png/:/rs=h:1500,cg:true,m" alt="" />
                </div>
                <div className="right">
                    <p>WELCOME</p>
                    <a href='#footer-alt'>BOOK NOW</a>
                </div>
            </section>

          
            {/* MAGICAL VACATION VIDEOS */}
            <section className="intro-section">
                <div className='intro-left'>
            <h3>MAGICAL VACATION VIDEOS</h3>

            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/PNwr2cjkBdw" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
                </div>
            <div className='intro-right'>
                <p>How will you be filming your once-in-a-lifetime Vacation? 
                    Don't use your phone... take your Disney Vacation videos to 
                    the NEXT LEVEL. Wishmaker uses our proprietary pixie dust to 
                    capture your Disney vacation, Disney wedding, or event in a <strong>whole </strong> 
                    new cinematic way.</p>
                    <ul>
                        <li>Disney Vacations</li>
                        <li>Disney Events</li>
                        <li>Disney Weddings</li>
                    </ul>
            </div>
            
            </section>

            <h3 className='videos-h3'>VACATION VIDEOS LIKE NEVER BEFORE</h3>
            <section className="carts-center">
            <div>

            </div>
            {card.map((i)=>{
                const {id,title,content,src} = i;

                return (
                    <article key={id} className="cart">
                        <img src={src} alt={title} />
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </article>
                )

            })}
              

            </section>

            <section className="recent-work">
                </section>  

                <Slide/>
                <Footer/>
        </>

    )
}

export default Dashboard
