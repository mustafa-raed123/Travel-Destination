import React from 'react'
import './Tours.css'

const data = require('../../data/db.json');


const Tours = () => {
  return (
   <div className='container'>
    {data.map((travel)=>{
        return (
            <div className='w-4 mb-3 p-3'>
                <h3>{travel.name}</h3>
                <div><img className='' src={travel.image} alt='travel.image'></img></div>
                <hr></hr>
            </div>
        )
    })}
   </div>
  )
}

export default Tours;
