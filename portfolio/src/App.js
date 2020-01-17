import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import IndexPage from './Components/Pages/IndexPages'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Skills from './Components/Pages/Skills'
import Portfolio from './Components/Pages/Portfolio'
import {
  BrowserRouter, 
  Switch, 
  Route } from 'react-router-dom'

//Redux
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={IndexPage}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/skills" component={Skills}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>  
  );
}

export default App;
