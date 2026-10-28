import React from 'react';

function ColoredButton({clr,submitFunc}) {
    return (
        <button onClick={submitFunc}>{clr}</button>
    );
}

export default ColoredButton;