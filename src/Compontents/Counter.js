import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "WsCube Tech",
            counter: 0
        }
    }
    render() {
        const incCounter = () => {
            this.setState(
                { counter: this.state.counter + 1 }
            );
        }
        const decCounter = () => {
            this.setState(
                { counter: this.state.counter - 1 }
            );
        }
        return (
            <div className='text-center'>
                <h4>Class</h4>
                <h1>{this.state.name}</h1>
                <h1>{this.state.counter}</h1>
                <button className='btn btn-primary m-3' onClick={() => incCounter()}>+</button>
                <button className='btn btn-primary m-3' onClick={() => decCounter()}>-</button>
            </div>
        )
    }
}

export default Counter;