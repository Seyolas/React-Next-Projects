import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import SingleMovie from './pages/SingleMovie'

function App() {

  return (
 
    <Switch>
     
      <Route exact path='/'><Home/></Route>
      <Route path='/about'><About/></Route>
      <Route path='/:id'><SingleMovie/></Route>
      <Route path='*'><Error/></Route>


    </Switch>

  )
}

export default App