import React from 'react'
export default function Person(props) {
    return (    
        <div className='col-4 mt-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.dec}</p>
                    <button className="btn btn-primary" onClick={() => props.event()}>Remove</button>
                </div>
            </div>
        </div>
    )
}
