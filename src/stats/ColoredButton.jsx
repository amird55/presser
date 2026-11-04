import React from 'react';
import  styles from './ColoredButton.module.css';

function ColoredButton({clr,submitFunc}) {
    return (
        <button 
            onClick={submitFunc} 
            className={styles.roundButton}
            style={{backgroundColor: clr}}
        >
            
        </button>
    );
}

export default ColoredButton;