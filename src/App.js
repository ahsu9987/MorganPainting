import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom/cjs/react-router-dom';
import Header from './Component/Header';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Footer from './Component/Footer';
import Conatct from './pages/Images/Contact';



function App() {
  return (
    <>
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/About" component={About}/>
      <Route exact path="/Service" component={Service}/>
      <Route exact path="/Contact" component={Conatct}/>
    </Switch>
    <Footer/>
  </Router>

    </>

  );
}

export default App;
