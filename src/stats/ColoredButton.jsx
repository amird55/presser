import React from 'react';

function ColoredButton({clr,submitFunc}) {
    return (
        <button onClick={submitFunc} style={{backgroundColor: clr}}>{clr}</button>
    );
}

export default ColoredButton;