import React, { Component } from 'react';
import './Check.css';
import Header from './Header'
import Check from "./Check";
import background from "./background2.jpg";
import Signin from "./Signin";
import Signup from "./Signup";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {

	constructor(props) {
	    super(props);
	    this.state = { apiResponse: "" };
	}

	callAPI() {
	    fetch("http://localhost:9000/testAPI")
		.then(res => res.text())
		.then(res => this.setState({ apiResponse: res }));
	}

	componentWillMount() {
	    this.callAPI();
	}

	render() {
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
	       <p className="App-intro">;{this.state.apiResponse}</p>
               </BrowserRouter>
        )
    }
}

export default App;