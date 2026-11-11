import React, {useState} from 'react';
import ColoredButton from "./ColoredButton.jsx";
import CounterShow from "./CounterShow.jsx";

function StatsPage(props) {
    let initVals=localStorage.getItem('presser_counter');
    initVals=initVals ? JSON.parse(initVals) :
        {
            '#ff0000': 0,
            '#00ff00': 0,
            '#26A59E': 0,
            '#00ffff': 0,
            '#ffff00': 0,
        };
    const [count, setCount] = useState(initVals);
    const incCount = (clr)=>{
        let c = {
            ...count,
            [clr]:count[clr]+1
        };
        localStorage.setItem('presser_counter', JSON.stringify(c));
        setCount(c)
    }
    return (
        <>
            <CounterShow cntr={count} />
            <table>
                <tr>
                    {Object.entries(count).map(([clr]) => (
                        <td key={clr}>
                            <ColoredButton clr={clr} submitFunc={()=>{incCount(clr)}} />
                        </td>
                    ))}
                </tr>
            </table>
        </>
    );
}

export default StatsPage;