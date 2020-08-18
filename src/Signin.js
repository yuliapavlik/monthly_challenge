import React from "react"


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
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" id="inputEmail" className="form-control" onChange={this.handleEmailChange} placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" className="form-control" onChange={this.handlePasswordChange} placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button"> Sign in
                </button>
            </form>
        )
    }
}

export default Signin