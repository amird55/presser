import React from 'react';

function ColoredButton({clr,submitFunc}) {
    return (
        <button 
            onClick={submitFunc} 
            className="roundButton"
            style={{backgroundColor: clr}}
        >
            
        </button>
    );
}

export default ColoredButton;