import React from 'react'
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Home = () => {

    return (

        <section id="section-center">
          <Dashboard/>
          {/* <Footer/> */}
        </section>
        
    )
}

export default Home
