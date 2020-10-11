import React from 'react';
import Check from "./Check";


let Checks = () => {
    let rows = [];
    for (let i = 0; i < 30; i++) {

        rows.push(<Check key={i} />);
    }
    return (
        <div className="check">

            {rows};
        </div>
    )
}
export default Checks