import React, {useState} from 'react';

function StatsPage(props) {
    const [count, setCount] = useState(
        {
            R: 0,
            G: 0,
            B: 0,
        }
    );
    const incCount = (clr)=>{
        let c = {
            ...count,
            [clr]:count[clr]+1
        };
        setCount(c)
    }
    const incCountR = ()=>{
        let c = {
            ...count,
            R:count.R+1
        };
        setCount(c)
    }
    const incCountG = ()=>{
        let c = {
            ...count,
            G:count.G+1
        };
        setCount(c)
    }
    const incCountB = ()=>{
        let c = {
            ...count,
            B:count.B+1
        };
        setCount(c)
    }
    return (
        <>
            <table>
                <tr>
                    <td>{count.R}</td>
                    <td>{count.G}</td>
                    <td>{count.B}</td>
                </tr>
                <tr>
                    <td><button onClick={incCountR}>R</button></td>
                    <td><button onClick={incCountG}>G</button></td>
                    <td><button onClick={incCountB}>B</button></td>
                </tr>
                <tr>
                    <td><button onClick={()=>{incCount("R")}}>R</button></td>
                    <td><button onClick={()=>{incCount("G")}}>G</button></td>
                    <td><button onClick={()=>{incCount("B")}}>B</button></td>
                </tr>
            </table>
        </>
    );
}

export default StatsPage;