import React from "react";
import tick from "./tick-mark.png";
import './Check.css';


class Check extends React.Component  {
    constructor() {
        super();
        this.state = {
            value: null
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(()=> {
            return {
                value: <img style={{width: 50, height: 60}} src={tick} alt="tick"/>
            }
        })
    }
    render() {return (


            <div>
                <button className="yuut"  onClick={this.handleClick}>
                    {this.state.value}
                </button>
            </div>

    )
    }

}

export default Check