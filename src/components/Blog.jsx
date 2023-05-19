import React from 'react'
import Data from './Data'

export default function Blog() {
  return (
    <div className='container-fluid my-5'>
      <h1 className='text-danger fw-bold my-5 text-center'>Blog</h1>
      <div className='row'>
        <div className='col-lg-4'>This is first blog post</div>
        <div className='col-lg-4'>This is Second blog post</div>
        <div className='col-lg-4'>This is third blog post</div>
      </div>
    </div>
  )
}
