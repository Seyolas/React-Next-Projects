import React from 'react'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../components/context'
const Videos = () => {
    const {videos} = useGlobalContext();
    console.log(videos);
    return (
        <>
        <Navbar/>

            <hr />
            <section className="section-videos-center">
                {videos.map((i)=>{
                    const {id,title,video_src,detail} = i;
                    return (
                        <div className='single-video' key={id}>
                            <div>
                            <h3>{title}</h3>
                            <iframe width="600" height="350" 
                            src={video_src} 
                            title="YouTube video player" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                            </div>
                            <div className="single-video-right">
                            <h2>{detail}</h2>
                            </div>
                        </div>
                    )
                })}
            </section>

        <div className='created-by'>COPYRIGHT © 2018 WISHMAKER FILMS - ALL RIGHTS RESERVED.</div>
        </>
    )
}

export default Videos
