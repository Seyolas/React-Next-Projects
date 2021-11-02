import React, { useState } from 'react'

const Footer = () => {

    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [number,setNumber]=useState('');
    const [msg,setMsg] = useState('');
    const [alert,setAlert] = useState(false);

    const handleSubmit = (e)=>{
      name === '' ? setAlert(true) : setAlert(false);
      mail === '' ? setAlert(true) : setAlert(false);
      number === '' ? setAlert(true) : setAlert(false);
      msg === '' ? setAlert(true) : setAlert(false);


        e.preventDefault();
    }
    return (
        <footer>
            <form onSubmit={handleSubmit}>
            <h3>CONTACT US</h3>
            {alert && <p>Please Fill Missing Inputs</p>}
            <div><input className={alert ? 'red-border' : null} value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' type="text" /></div>
            <div><input className={alert ? 'red-border' : null} value={mail} onChange={(e)=>setMail(e.target.value)} placeholder='Email' type="email" /></div>
            <div><input className={alert ? 'red-border' : null} value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Phone' type='number' /></div> 
            <div> <textarea className={alert ? 'red-border' : null} value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Your Message' cols="num" rows="num"></textarea></div>  
            <div className='bb'><button type='submit'>SEND</button></div> 
            </form>
        </footer>
    )
}

export default Footer
