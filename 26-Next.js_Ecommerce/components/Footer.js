

const Footer = () => {
    return (
        <footer>
        <a
          href="https://seydisaritas.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2022 Seydi Saritas. All rights reserved. Built with Next.js{' '}
        
        </a>

        <style jsx>{`
            
            footer {
            display: flex;
            flex: 1;
            padding: 2rem 0;
            border-top: 1px solid #eaeaea;
            justify-content: center;
            align-items: center;
            }

            footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            }
            
            `}

        </style>
      </footer>
    )
}

export default Footer
