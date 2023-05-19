import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
        <div className='col-lg-6'>
          <img src="https://img.freepik.com/premium-vector/girl-laying-floor-cartoon-character_1308-78370.jpg?w=740" alt=""  className='w-100'/>
        </div>
      </div>
    </div>
    <div className='container-fluid py-2 pb-5'>
      <h1 className='text-danger fw-bold text-center pb-3'>Slider</h1>
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-100' /></SwiperSlide>
      <SwiperSlide><img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-100'/></SwiperSlide>
      <SwiperSlide><img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-100'/></SwiperSlide>
      <SwiperSlide><img src="https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""  className='w-100'/></SwiperSlide>
    </Swiper>
    </div>
    </>
   
  )
}
