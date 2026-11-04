import React, {useState} from 'react';
import ColoredButton from "./ColoredButton.jsx";
import CounterShow from "./CounterShow.jsx";

function StatsPage(props) {
    const [count, setCount] = useState(
        {
            '#ff0000': 0,
            '#00ff00': 0,
            '#26A59E': 0,
            '#00ffff': 0,
            '#ffff00': 0,
        }
    );
    const incCount = (clr)=>{
        let c = {
            ...count,
            [clr]:count[clr]+1
        };
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