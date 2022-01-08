import React, { useState } from 'react'

export default function CounterFn() {
    const [counter, changeCounter] = useState(0);
    const incCounter = () => {
        changeCounter(counter + 1);
    }
    const decCounter = () => {
        changeCounter(counter - 1);
    }
    return (
        <div className='text-center'>
            <h4>Functional</h4>
            <h1>{counter}</h1>
            <button className='btn btn-primary m-3' onClick={() => incCounter()}>+</button>
            <button className='btn btn-primary m-3' onClick={() => decCounter()}>-</button>
        </div>
    )
}
