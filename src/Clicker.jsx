import React, {useState} from 'react';

function Clicker(props) {
    const [count, setCount] = useState(0);
    const incCount = ()=>{setCount(count+1)}
    const resetCount = ()=>{setCount(0)}
    return (
        <>
            <div className="button_row">
            <button onClick={incCount}>Click me</button>
            <div>You clicked {count} times</div>
            <button
                onClick={resetCount}
            >
                Reset
            </button>
            </div>
        </>
    );
}

export default Clicker;