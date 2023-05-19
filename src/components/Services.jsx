import React from 'react'

export default function Services(props) {
  return (
    <>
    <div className='sbox container'>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
    </>
  )
}
