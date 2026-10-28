import React from 'react';

function CounterShow({cntr}) {
    return (
        <table>
            {cntr.map((cntVal,clrName) => (
                <tr key={clrName}>
                    <td>{clrName}</td>
                    <td>{cntVal}</td>
                </tr>
            ))}
        </table>
    );
}

export default CounterShow;