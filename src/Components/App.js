import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Nav from './Nav';
import './App.css';

class App extends React.Component{
    render(){
      return(
        <div className="app-wrapper">
          <Header/>
          <Nav/>
          <Content/>
          <Footer/>
        </div>
      )
    }
}

export default App;