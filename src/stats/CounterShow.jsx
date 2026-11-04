import React from 'react';

function CounterShow({cntr}) {
    return (
        <table style={{backgroundColor:"blue",color:"yellow" }}>
            {Object.entries(cntr).map(([clrName, cntVal]) => (
                <tr key={clrName}>
                    <td>{clrName}</td>
                    <td>{cntVal}</td>
                </tr>
            ))}
        </table>
    );
}

export default CounterShow;