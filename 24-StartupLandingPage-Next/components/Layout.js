import Navbar from '../components/Header/Navbar'
import Footer from "../components/Footer/Footer"

const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout