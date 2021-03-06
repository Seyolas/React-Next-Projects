import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(false);
  const [person,setPerson] = useState(null);
  const [title,setTitle]=useState('name');
  const [value,setValue] = useState('random person');
  
  const fetchData =async ()=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0]);

    const {login:{password}} = data.results[0];
    console.log(password);







    // const image = data.results[0].picture.large;
    // const {first:isim,last:soyisim}= data.results[0].name;
    // const email =data.results[0].email;
    // const {age}= data.results[0].dob;
    // const {number:streetNumber,name:streetName}=data.results[0].location.street;
    // const phone = data.results[0].cell;
    // const password = data.results[0].login.password;
    // console.log(password);


    // const {title,first:name,last:surname}=data.results[0].name;
    // console.log(title,name,surname);


  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleValue=(e)=>{
    console.log(e.target);
  }


  return( <main>
    <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={(person && person.image) || defaultImage} alt="random user" className='user-img' />
          <p className='user-title'>my {title} is</p>
          <p className='user-value'>{value}</p>
          <div className="values-list">

            <button className="icon" data-label='name' onMouseOver={handleValue}><FaUser/></button>
            <button className="icon" data-label='email' onMouseOver={handleValue}><FaEnvelopeOpen/></button>
            <button className="icon" data-label='age' onMouseOver={handleValue}><FaCalendarTimes/></button>
            <button className="icon" data-label='street' onMouseOver={handleValue}><FaMap/></button>
            <button className="icon" data-label='phone' onMouseOver={handleValue}><FaPhone/></button>
            <button className="icon" data-label='password' onMouseOver={handleValue}><FaLock/></button>

          </div>

          <button type='button' className="btn">{loading ? 'loading...' : 'random user'}</button>

        </div>
      </div>
  
  </main>
  )
}

export default App
