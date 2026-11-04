import React from 'react';

function CounterShow({cntr}) {
    return (
        <table>
            {Object.entries(cntr).map(([clrName, cntVal]) => (
                <tr key={clrName} style={{backgroundColor: clrName}}>
                    <td>{clrName}</td>
                    <td>{cntVal}</td>
                </tr>
            ))}
        </table>
    );
}

export default CounterShow;