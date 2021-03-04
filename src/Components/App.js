import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer';
import Nav from './Nav/Nav';
import Messages from './Messages/Messages';
import {BrowserRouter, Route} from "react-router-dom";
import {addNewPost} from './../Redux/State'
import './App.css';

const App = (props) => {
    const itemsMessage = () => <Messages itemsMessages={props.state.Messages}/>
    const itemsContent = () => <Content itemsContent={props.state.Content} addPosts={addNewPost}/>
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                {/*<Route path="/Messages" component={Messages}/>*/}
                {/*<Route path="/Profile" component={Content}/>*/}
                <Route path="/Messages" render={itemsMessage}/>
                <Route path="/Profile" render={itemsContent}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;