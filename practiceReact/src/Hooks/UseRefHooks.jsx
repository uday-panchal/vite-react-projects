import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseRefHook = () => {
    const [myData, setMyData] = useState()

    // const [count, setCount] = useState(0)
    const inputRef = useRef();
    const count = useRef(10);
    console.log('useref line 10', count)

    // useEffect(() => {
    //     setCount(count + 1)
    // })

    useEffect(() => {
        count.current = count.current + 1
    })

    const changeStyle = () => {
        console.log(inputRef);
        inputRef.current.style.backgroundColor = 'grey'
        inputRef.current.focus();
    }
    
    return (
        <div style={{backgroundColor: "white", height: '100vh'}}>
        <input type="text" value={myData} onChange={(e) => setMyData(e.target.value)}/>
        <p>The number of times render: {count.current}</p>
        <br/>
        <button onClick={changeStyle} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
        </div>

    )
}

export default UseRefHook