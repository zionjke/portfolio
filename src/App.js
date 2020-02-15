import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import BrowserRouter from "react-router-dom/BrowserRouter";


function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
                <div className="portfolio">
                    <Header/>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <Slogan/>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
