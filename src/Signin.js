import React from "react"
import './Signin.css';
import {Link} from "react-router-dom";



class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }

    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    signIn(){
        alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
    }
    render() {
        return (
            <div className="container">
            <div className="container-login">
            <div className="limited">

            <form className="form-signin">
                <p className="form-title"> Account Login </p>
                <div className="validate-input">
                <div className="wrap-input100 rs1-wrap-input100">
                <input type="email" id="inputEmail" className="form-control" onChange={this.handleEmailChange} placeholder="Email address" required autofocus />
                </div>
                <div className="wrap-input100 rs2-wrap-input100">
                <input type="password" id="inputPassword" className="form-control" onChange={this.handlePasswordChange} placeholder="Password" required />
                </div>
                </div>

                <div className="container-btn">
                    <Link to="/main">   <button  className="btn" onClick={this.signIn} type="button"> Sign in
                </button> </Link>
                </div>

            </form>
                <div className="login"/>

            </div>
            </div>
            </div>
        )
    }
}

export default Signin