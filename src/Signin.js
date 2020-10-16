import { withRouter } from "react-router-dom";
import React from "react"
import './Signin.css';


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
    signIn(e){
        e.preventDefault();
        const { email, password } = this.state;
        const user = {
            email,
            password,
        };
        fetch('http://localhost:4000/user/login',{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            redirect: "manual",
            body: JSON.stringify(user)
        }).then(res => {
            if(res.status === 200) {
                // console.log(`Status is: ${res.status}, redirected: ${res.redirected}`)
                const { pathname } = new URL("http://localhost:4000/main");
                // https://stackoverflow.com/questions/55070312/react-redirect-in-fetch
                // https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
                this.props.history.push(pathname);
            }
        });
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
                <input type="email" id="inputEmail" className="form-control"
                       onChange={this.handleEmailChange} placeholder="Email address" required autoFocus />
                </div>
                <div className="wrap-input100 rs2-wrap-input100">
                <input type="password" id="inputPassword" className="form-control"
                       onChange={this.handlePasswordChange} placeholder="Password" required />
                </div>
                </div>

                <div className="container-btn">
                    <button  className="btn" onClick={this.signIn} type="button"> Sign in
                </button>
                </div>

            </form>
                <div className="login"/>

            </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Signin);