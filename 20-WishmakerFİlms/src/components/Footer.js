import React, { useState } from 'react'

const Footer = () => {

    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [number,setNumber]=useState('');
    const [msg,setMsg] = useState('');
    const [alert,setAlert] = useState({show:false,message:''});

    const handleSubmit = (e)=>{
    
        if (name==='' || mail==='' || number==='' || msg==='') {
            setAlert({show:true,message:'Please fill all areas'})
        }
        else{
            setAlert({show:false,msg:''})
        }
        e.preventDefault();
    }
    return (
        <footer>
            <form onSubmit={handleSubmit}>
            <h3>CONTACT US</h3>
            <p className='alert-p'>{alert && alert.message}</p>
            <div><input  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' type="text" /></div>
            <div><input value={mail} onChange={(e)=>setMail(e.target.value)} placeholder='Email' type="email" /></div>
            <div><input value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Phone' type='number' /></div> 
            <div> <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Your Message' cols="num" rows="num"></textarea></div> 
            <div className='bb'><button type='submit'>SEND</button></div> 
            </form>

            <div id='footer-alt'>
                <h2>We'd love to hear from you!</h2>
                <p>Have a question? Send us the details on the type of project you're looking to hire for, and we'll be happy to get back to you with a free quote and information.</p>
                <h2>Call Wishmaker Films at</h2>
                <p>(+9)05533411643</p>

                <div>Created By <a target='_blank' href="https://twitter.com/seyolasd"><strong>Seyolas</strong></a></div>
              
            </div>
        </footer>
    )
}

export default Footer
