// import { useEffect, useState } from "react"
import React, {useEffect, useState} from 'react'

const useEffectHooks = () => {
    const [count, setCount] = useState(0)
    const [doubleCount, setDoubleCount] = useState(0)
    const [tripleCount, setTripleCount] = useState(0)
    useEffect(() => {
        console.log('This is the first effect');
    }, [tripleCount])
    const onIncrementClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    const onDoubleCount = () => {
        setDoubleCount(prevCount => prevCount + 2)
    }
    const onTripleCount = () => {
        setTripleCount(prevCount => prevCount + 3)
    }
    return (
        <div style={{backgroundColor: 'white', height: '100vh',}}>
        <p>Count : {count}</p>
        <button onClick={onIncrementClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Increment</button>
        
        <p>double Count : {doubleCount}</p>
         <button onClick={onDoubleCount} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Double Count</button>

         <p>triple Count : {tripleCount}</p>
         <button onClick={onTripleCount} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Triple Count</button>
    </div>
    )
}
export default useEffectHooks 