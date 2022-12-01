import React from 'react'

export default function Card(props) {
    return (
        <div className="card w-80 bg-base-100 shadow-xl border-solid transition-all ease-in-out hover:scale-110">
            <figure className='h-100'><img src={props.location} alt={props.alt} /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">
                    {props.title}
                </h2>
                <p className='py-2'>{props.description}</p>

            </div>
        </div>
    )
}
