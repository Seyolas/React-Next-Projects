import Slider from "react-slick";
import Image from 'next/image'


const Slayt = () => {

    const settings = {  
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false
      };
      
    return ( 
        <Slider className='slide' {...settings}>

        <div>
          <Image className='monkeys-img' src="/monkeys/1.png" alt="" width={300} height={500} />
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/2.png" alt="" width={300} height={500} />
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/3.png" alt="" width={300} height={500} />
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/4.png" alt="" width={300} height={500} />
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/5.jpg" alt="" width={300} height={500} />
        </div>

      
        <div>
          <Image className='monkeys-img' src="/monkeys/6.png" alt=""  width={300} height={500}/>
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/7.jpg" alt="" width={300} height={500} />
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/8.jpg" alt="" width={300} height={500} />
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/9.jpg" alt="" width={300} height={500} />
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/10.jpg" alt="" width={300} height={500} />
        </div>

        <div>
          <Image className='monkeys-img' src="/monkeys/11.png" alt="" width={300} height={500} />
        </div>


        </Slider> 
        
    );
}
 
export default Slayt;