import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer';
import Nav from './Nav/Nav';
import Messages from './Messages/Messages';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

class App extends React.Component{
    render(){
      return(
        <BrowserRouter>
          <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Route path="/Messages" component={Messages}/>
            <Route path="/Profile" component={Content}/>
            <Footer/>
          </div>
        </BrowserRouter>
      )
    }
}

export default App;