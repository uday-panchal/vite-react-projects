import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import Todo from './Todo';


const UseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [todo, setTodo] = useState([]);
    const onIncrementPress = () => {
        setCounter(prev => prev + 1)
    }
    const addTodo = useCallback(() => {
        setTodo(prev => [...prev, 'new todo'])
    }, [todco])
        
    return(
        <div style={{backgroundColor: 'white', height: '100vh'}}>
            <div>Count : {counter}</div>
            <button onClick={onIncrementPress} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increment</button>
            <hr></hr>
            <Todo todos={todo} addTodo={addTodo}/>
        </div>
    )
}

export default UseCallback;