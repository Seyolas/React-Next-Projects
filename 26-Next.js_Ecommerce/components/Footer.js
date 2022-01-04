

const Footer = () => {
    return (
        <footer>
          <div className="footer-left">

          <div className="address">
            <img width={100} src="/logo.svg" alt="logo" />
            <p style={{fontWeight:900}}>Our Store</p>
            <p style={{fontWeight:900}}>Norremark 51,8700 Horsens Denmark</p>
          </div>

          <div className="socials">
            <img width={30} src="/facebook.png" alt="facebook icon" />
            <img width={30} src="/instagram.png" alt="instagram icon" />
            <img width={30} src="/twitter.png" alt="twitter icon" />
          </div>

          <div className="payments">
            <img src="/visa.png" alt="visa icon" />
            <img src="/paypal.png" alt="paypal icon" />
            <img src="/mastercard.png" alt="mastercard icon" />
          </div>

          </div>

          <div className="footer-right">

              <ul className="information">
                <li className="header">Newsroom</li>
                <li>Story</li>
                <li>Yofte Careers</li>
                <li>Investor Relatins</li>
                <li>Reward program</li>
                <li>Delivery information</li>
                <li>Paying by invoice</li>
              </ul>

              <ul className="customer-service">
                <li className="header">Return an order</li>
                <li>Search Terms</li>
                <li>Advanced Search</li>
                <li>Orders and Returns</li>
                <li>FAQs</li>
                <li>Store Location</li>
                <li>Contact Us</li>
              </ul>

              <ul className="contact-us">
                  <li className="header">Mobile</li>
                  <li>+39 4097 533 32 331</li>
                  <li>Email</li>
                  <li>saritas.seydi@gmail.com</li>
                  <li>Live Chat</li>
                  <li>maytagstore</li>
                  <li>kekostore</li>

              </ul>
              
          </div>






          <style jsx>{`

            footer{
              width:100%;
              max-width:100%;
              height:fit-content;
              display:flex;
              overflow:none;
              margin-top:5rem;
            }
            .footer-left{
              width:20%;
              max-width:20%;
              background-color:#f8fafc;
              display:flex;
              flex-direction:column;
              padding:0 1rem;
            }
            .footer-left>*{
              margin:1rem;
            }
            .socials>*{
              margin-right:0.6rem;
            }
            .payments>*{
              margin-right:0.6rem;

            }

            .footer-right{
              display:flex;
              padding:2rem auto;
              align-items:center;
              justify-content:center;
              background-color:#e2e8f0;
              width:80%;
              max-width:80%;
            }
            .footer-right ul{
              margin:3rem;
            }
            .footer-right ul li{
              margin:1rem;
            }
            .footer-right ul li:hover{
              text-decoration:underline;
              cursor:pointer;
            }
            .footer-right .header{
              font-weight:900;
              font-size:1.1rem;
            }
            
            @media screen and (max-width:900px){
              .footer-left{
                width:30%;
                max-width:30%;
                justify-content:center;
              }
              .footer-right{
              width:100%;
              max-width:100%;
            }

            .footer-right ul{
              margin:0;
            }
            .footer-right ul li{
              margin:1rem;
            }


            }

            @media screen and (max-width:500px){
              footer{
                flex-direction:column;
                margin-top:2rem;
              border-top: 1px solid #eaeaea;

              }
              .footer-left{
                width:100%;
                max-width:100%;
                display:flex;
                justify-content:center;
              }
              .footer-right{
              padding:2rem auto;
              align-items:start;
              justify-content:start;
              flex-wrap:wrap;
              width:100%;
              max-width:100%;
              padding-bottom:10rem;
            }

            .footer-right ul{
              margin:0;
            }
            .footer-right ul li{
              margin:1rem;
            }


            }

            @media screen and (max-width:376px){

              .footer-right{
              padding-bottom:12rem;
            }

            }


            


            `}

          </style>
      </footer>
    )
}

export default Footer
