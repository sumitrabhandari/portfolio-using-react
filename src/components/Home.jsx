import React from 'react'

export default function Home() {
  return (
    <>
     <div className='container-fluid px-5 my-5'>
      <div className='row py-2'>
        <div className='col-lg-6 mt-5'>
        <h6 className='fw-2'>Hello I am</h6>
          <h1 className='text-danger fw-bold'>Sumitra Bhandari</h1>
          <h5 className='fw-bold'>Front End Developer</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae magni fuga autem. Quibusdam repudiandae corrupti doloribus, tempora laboriosam quis voluptates quo quasi aliquid enim porro accusantium veniam ratione fugit.</p>
          </div>
        <div className='col-lg-6'><img src="https://img.freepik.com/premium-vector/girl-laying-floor-cartoon-character_1308-78370.jpg?w=740" alt=""  className='w-100'/></div>
      </div>
    </div>
    </>
   
  )
}
