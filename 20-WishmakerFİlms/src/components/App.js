import React from 'react'
import Home from '../pages/Home';
import Videos from '../pages/Videos';
import Error from '../pages/Error';
import { Switch, Route } from 'react-router';
const App = () => {

  return (
    <>
    <Switch>
     <Route exact path='/'><Home/></Route>
     <Route path='/videos'><Videos/></Route>
     <Route path='*'><Error/></Route>
   </Switch>
   
  </>
  )
}

export default App
