import React, {useState} from 'react';

function SimpleHomePage(props) {
    const [toShow, setToShow] = useState(true);
    const  show=()=>{setToShow(true);}
    const  hide=()=>{setToShow(false);}
    const  toggle=()=>{setToShow(!toShow);}
    return (
        <>
            <div className="button_row">
                <button onClick={show}>Show</button>
                <button onClick={toggle}>Toggle</button>
                <button onClick={hide}>Hide</button>
            </div>
            {toShow && 
        (<h1>Hello World</h1>)
            }
        </>
    );
}

export default SimpleHomePage;