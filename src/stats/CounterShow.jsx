import React from 'react';

function CounterShow({cntr}) {
    let sortedCntr = Object.fromEntries(
                        Object.entries(cntr).sort(([, a], [, b]) => b - a)
    );
    let sortedEntries = Object.entries(cntr).sort((a, b) => b[1] - a[1]);
    return (
        <table>
            {sortedEntries.map(([clrName, cntVal]) => (
                <tr key={clrName} style={{backgroundColor: clrName}}>
                    <td>{cntVal}</td>
                </tr>
            ))}
        </table>
    );
}

export default CounterShow;