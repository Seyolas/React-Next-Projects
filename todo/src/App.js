import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'



const getLocalStorage = ()=>{
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}
function App() {

  const [name, setName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  const [alert,setAlert] = useState({
    show:false,
    msg:'',
    type:''
  });

  const handleSubmit= (e)=>{

    e.preventDefault();

    if (!name) {
      showAlert(true,'danger','please enter a value');
        // setAlert({show:true, msg:'değer gir keje', type:'danger'})
    }
    else if(name && isEditing){
      // deal with edit..
      setList(
        list.map((i)=>{
          if (i.id===editID) {
              return {...i,title:name}
          }
          return i
        })
        
        )
        setName('');
        setEditID(null);
        setIsEditing(false);
        showAlert(true,'success','value changed');
    }
    else {
      showAlert(true,'success','item added succesfuly');

      // setAlert({show:true, msg:'item added succesfuly', type:'success'})

      const newItem = {id: new Date().getTime().toString(), title:name}
      setList([...list,newItem]);
      setName('');
      
    }

  }


 const showAlert = (show=false, type = '', msg = '') =>{
    setAlert({show:show,type:type,msg:msg});

 }

 const removeItem = (id)=>{
   showAlert(true,'danger','item removed');
   setList(list.filter((i)=>i.id!=id))
 }

 const editItem = (id)=>{
  const specificItem = list.find((i)=>i.id===id);
  setIsEditing(true);
  setEditID(id);
  setName(specificItem.title);

 }

 useEffect(() => {
   localStorage.setItem('list',JSON.stringify(list))
   
 }, [list])

  return(

   <section className="section-center">

     <form onSubmit={handleSubmit} className="grocery-form">

      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h3>Grocery bud</h3>
      <div className="form-control">
      <input type="text" className='grocery' placeholder='e.g egss'
      value={name} onChange={(e)=>setName(e.target.value)}
      />
      <button type='submit' className='submit-btn'>
        {isEditing ? 'edit': 'submit'}
      </button>
      </div>
     </form>

    {list.length > 0 && 
     <div className="grocery-container">
       <List items={list} removeItem={removeItem} editItem={editItem}/>
       <button onClick={()=>setList([])} className='clear-btn'>Clear Items</button>
     </div>
     
    }
  </section>

  )
}

export default App
