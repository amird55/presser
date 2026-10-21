import React, {useState} from 'react';

function SimpleHomePage(props) {
    const [toShow, setToShow] = useState(true);
    return (
        <>
            {toShow && 
        (<h1>Hello World</h1>)
            }
        </>
    );
}

export default SimpleHomePage;