import Link from "next/link";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
export const getStaticPaths = async ()=>{
    const response = await fetch('https://www.freetogame.com/api/games');
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
    const res = await fetch('https://www.freetogame.com/api/game?id='+id);
    const data = await res.json();

    return {props:{games:data}}
}

const details = ({games}) => {
    
    const [showmore,setShowmore] = useState(false);
    const [index,setIndex] = useState(0);
   

    const {title,thumbnail,short_description,description,
        genre,publisher,developer,platform,release_date,
        minimum_system_requirements:{os,processor,memory,graphics,storage},screenshots}=games;

    const newScreenshots = [{id:'',image:thumbnail},...screenshots];
   
    const ChangeImage = (activeIndex)=>setIndex(activeIndex)
    

    if (games.platform==='Web Browser') {
        const {title,thumbnail,short_description,description,
            genre,publisher,developer,platform,screenshots}=games;
            return(
                <main>
                <div className="left">
                <div>{title}</div>
               <img src={thumbnail} alt={title} />
               <div>
                   {screenshots.map((i)=><img width={200} key={i.id} src={i.image}/>)}
                </div>
                </div>
              <div className="right">
              <div>{short_description}</div>
              <div>{description}</div>
              <div>{developer}</div>
              <div>{publisher}</div>
              </div>
    
              <style jsx>{`
                  main{
                      color:#fff;
                  }
                  `}
    
              </style>
    
              </main>
            )
        }

    return (
        <>
        <main>
            <div className="left">
            <h1>{title}</h1>
           <img className='main-img'  src={newScreenshots[index].image} alt={title} />
           <div className='image-container'>
               {screenshots.map((i,index)=><img onClick={()=>ChangeImage(index+1)} className='small-img' key={i.id} src={i.image}/>)}
            </div>
            </div>
          <div className="right">
          
          <div>{short_description}</div>
          <div>{`${showmore ? description : description.substring(0,170)}...`} 
          <button className='showmore' onClick={()=>setShowmore(!showmore)}>{`${showmore ? 'Show Less':'Read More'}`}</button></div>
          <span className='less'>Developer:</span><span className='more'>{developer}</span> 
          <div></div>
          <span className='less'>Publisher:</span><span className='more'>{publisher}</span> 
        <div></div>
        <span className='less'>Release Date:</span><span className='more'>{release_date}</span> 
<div><Link href='/'><a className='back'>Back To Home Page</a></Link></div>       

          </div>

          </main>

            <div className="alt">
            <p id='system-p'>SYSTEM REQUIREMENTS</p>
            <div>
            <div><FcCheckmark/>{os}</div>
            <div><FcCheckmark/>{processor}</div>
            <div><FcCheckmark/>{memory}</div>
            <div><FcCheckmark/>{graphics === '?' ? 'Graphics does not matter at all':graphics}</div>
            <div><FcCheckmark/>{storage}</div>

                </div> 
           
            </div>
          

            <style jsx>{`
               main{
                   display:flex;
                   width:95vw;
                   margin:2rem auto;        
                    font-weight:900;
                    color:white;  
               }
              
               main h1{
                   font-size:2rem;
                   letter-spacing:2px;
                   text-shadow: 3px 3px 20px #ff99cc,
                    -2px 1px 30px #ff99cc;

               }
               .main-img{
                   width:34vw;
                   height:30vh;
                   object-fit:cover;
               }
              
             
               .left .small-img{
                   width:17vw;
                   padding:0.5rem;
                   cursor:pointer;
               }
               .image-container{
                   display:flex;
                   width:34vw;
                    max-width:34vw;
                    flex-wrap:wrap;
               }
               .right{
                   margin-top:2rem;
                   
               }
               .right>*{
                   margin:1rem;
                   line-height:27px;
               }
               .right .less{
                   opacity:0.5;
               }
               .right .more{
                color:#fff;

               }
               .right .showmore{
                   text-decoration:underline;
                   color:#EC4899;
                    border:none;
                    outline:none;
                    background-color: Transparent;
                    background-repeat:no-repeat;
                    cursor:pointer;
                    font-weight:bolder;
                    
                    overflow: hidden;  
               }
               .right .showmore:hover{
                   color:#BE185D;
               }
               .back{
                color:#EC4899;
                
               }
               .back:hover{
                color:#BE185D;
               }
              
               .alt{
                   margin-left:2rem;        
                   color:#fff;
                   width:fit-content;
                   line-height:27px;
                   
               }
               .alt>* div{
                   margin-top:0.4rem;
                    font-weight:900;

               }
               #system-p{
                   text-decoration:underline;
                   letter-spacing:1px;
               }

              
                `}

            </style>

            </>
    )
}

export default details
