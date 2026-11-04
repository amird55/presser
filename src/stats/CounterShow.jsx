import React from 'react';

function CounterShow({cntr}) {
    let sortedCntr = cntr.sort((a, b) => a[1] - b[1]);
    return (
        <table>
            {Object.entries(sortedCntr).map(([clrName, cntVal]) => (
                <tr key={clrName} style={{backgroundColor: clrName}}>
                    <td>{cntVal}</td>
                </tr>
            ))}
        </table>
    );
}

export default CounterShow;