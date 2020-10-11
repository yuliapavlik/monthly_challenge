import React from 'react';
import Check from "./Check";
import './Check.css';
import Header from "./Header";
import  Checks from "./ Checks";

let Main = () => {
    return (
        <div className="image">
            <Header/>
        <div  className="check">

            <Checks/>

        </div>
        </div>

    );
}
export default Main