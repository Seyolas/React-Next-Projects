import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slayt from '../components/Slayt';
import Sehitler from '../components/Sehitler';
export default function Home() {
  return (
    <>
      <Head>
        <title>Suriye Şehitleri</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="suriyeli,şehit,muz,suriye şehitleri,suriyeliler,vatan, muz yiyen suriyeli, muz yiyen suriyeliler, suriye şehitlerimiz, afrin şehitleri"/>
        <meta name="description" content="Suriye şehitleri" />
        <meta name='author' content='Seydi Sarıtaş' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>


      <Navbar/>
      <Slayt/>
        <hr className="hr-text" data-content="SURİYE ŞEHİTLERİ"/>
      <Sehitler/>
        <div className='alert'>
         Eksik olan şehitler en kısa zamanda eklenecektir...
      </div>
      
    <Footer/>
    </>
  )
}
