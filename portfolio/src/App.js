import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import IndexPage from './Components/Pages/IndexPages'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Pages/Portfolio'
import {
  BrowserRouter, 
  Switch, 
  Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={IndexPage}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>  
  );
}

export default App;
