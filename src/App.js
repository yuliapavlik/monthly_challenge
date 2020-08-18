import React from 'react';
import './Check.css';
import Header from './Header'
import Check from "./Check";
import background from "./background2.jpg";
import Signin from "./Signin";
import Signup from "./Signup";
import {BrowserRouter, Route} from "react-router-dom";
 const App = () => {

        return (
            <BrowserRouter>
            <div>
                <Header/>
                <div className="check">
                <Check/>
                <Check/>
                <Check/>
                <Check/>
                <Check/>
                <Check/>
                <Check/>
                <Check/>
                <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>
                    <Check/>

                </div>
               <Route component={Signin} />
                <Route component={Signup} />
            </div>
                </BrowserRouter>
        )
    }



export default App