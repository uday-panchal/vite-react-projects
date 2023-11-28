import React, {useEffect, useState, useRef, useCallback} from 'react'

const PasswordCreate = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    return (
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
            <h1 className='text-white text-center my-3'>Password gernator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-3">
                <input type='text' value={Password} className='outline-none w-full py-3' placeholder='Password' readOnly ref={passwordRef}/>
                <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
            </div>
            <div className='flex text-sm gap-x-2'>
                <div className='flex item-center gap-x-1'>
                    <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
                    <label>Length : {length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => {
                        setNumberAllowed((prev) => !prev)
                    }}/>
                </div>
                <label htmlFor='numberInput'>Number</label>
            </div>
        </div>
    )
}
export default PasswordCreate;