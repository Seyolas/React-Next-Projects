import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FCA5A5" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FCA5A5" }}
      onClick={onClick}
    />
  );
}


export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplay: true,
      speed: 100,
      autoplaySpeed: 4000,
      cssEase: "linear",
      nextArrow:<SampleNextArrow/>,
      prevArrow: <SamplePrevArrow />,
     
    };
    return (
      <div>
        <h3 className='recent-h3'>RECENT WORK</h3>
        <Slider className='slide' {...settings}>
        <div>
         <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/4c9417d0-8356-48c3-878f-ba09b5250acc.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        <div>
        <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/453a0b06-b2d9-4c9a-bf44-54e07d1b3c6e.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        <div>
        <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/6807c80c-92c2-44ad-b277-af36e7278d84.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        <div>
        <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/7c162755-d6d0-416b-8a97-2e18df78d939.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        <div>
        <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/b556e871-ffb0-46c2-b60b-483b03b2fe35.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        <div>
        <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/aaa617fe-3217-4448-a621-acec9ea3c6bd.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        <div>
          <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/567d30ca-69a5-41d6-b341-7048ec63782b.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        <div>
          <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/44b706a8-d4bb-435f-b86f-d0139b714afb.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        <div>
          <img src="https://img1.wsimg.com/isteam/ip/94aac668-3b21-4d4c-940a-f2b4de0cd09c/20836dfc-9803-4a88-b3cf-60b2c309a424.jpg/:/rs=w:1950,h:1200" alt="" />
        </div>
        </Slider>
      </div>
    );
  }
}