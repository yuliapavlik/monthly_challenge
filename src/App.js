import React, { Component } from 'react';
import Signin from "./Signin";
import Signup from "./Signup";
import Main from "./Main";
import  './oldi.css';
import './Signin.css';
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation
} from "react-router-dom";

class App extends Component {

	constructor(props) {
	    super(props);
	    this.state = { apiResponse: "" };
	}

	callAPI() {
	    fetch("http://localhost:4000/")
		.then(res => res.text())
		.then(res => this.setState({ apiResponse: res }));
	}

	componentWillMount() {
	    this.callAPI();
	}

	render() {
        return (

            <div>
				<BrowserRouter>
					<Route exact path="/" component={Signin} />
					<Route exact path="/main" component={Main} />
				</BrowserRouter>
				{/*<p className="App-intro">;{this.state.apiResponse}</p>*/}
            </div>


        )
    }
}

export default App;