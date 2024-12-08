import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router';


function ReadandInspiredSlider({blogs}) {
  const router = useRouter();
    
      const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
      {
        breakpoint: 1024, // Tablets and small desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ]
      };
  return (
    <div className='relative w-full'>
        <Slider {...settings}>
           {blogs?.map((elm,id)=>{
          return  id%2==0 ?       <div className='lg:w-[210px] w-full'>
        <div className='lg:w-[210px] w-full lg:h-[250px] h-[350px] relative'>
            <img className='w-full h-full object-cover' src={elm.imges[0]} alt=''/>
            <div className='absolute top-0 bg-white left-2 p-2'>
                <p className='text-[16px] font-[450]'>17 </p>
                <p className='text-[16px] font-[450]'>June </p>
            </div>
            <div className='mt-3'>
                <div className='flex flex-row justify-start space-x-2'>
                    <h1 className='text-[#3e4939] font-[400] text-[15px]'>By Mehul</h1>
                    <p className='text-[#3e4939] font-[400] text-[15px]'>/</p>
                    <p className='text-[#3e4939] font-[400] text-[15px]'>Aero</p>
                </div>

            </div>
            <div className='mt-2'>
                    <h1 className='font-[600] text-[20px]'>{elm.description}</h1>
                </div>

        </div>


      </div>
      :   
      <div className='lg:w-[210px] w-full'>
        <div className='lg:w-[210px] lg:h-[310px] w-[90%] lg:mx-0 mx-auto h-[350px] relative'>
            <img className='w-full cursor-pointer  h-full object-cover' src={elm?.imges[0]} alt='' onClick={()=>{router.push(`/blogs/${elm.category[0] + "/" + elm._id}`)}} />
            <div className='absolute top-0 bg-white left-2 p-2'>
                <p className='text-[16px] font-[550]'>17 </p>
                <p className='text-[16px] font-[550]'>June </p>
            </div>

        </div>
        <div className='mt-3'>
                <div className='flex flex-row justify-start space-x-2'>
                    <h1 className='text-[#3e4939] font-[400] text-[15px]'>By Mehul</h1>
                    <p className='text-[#3e4939] font-[400] text-[15px]'>/</p>
                    <p className='text-[#3e4939] font-[400] text-[15px]'>{elm?.category[0]}</p>
                </div>

            </div>
        <div className='mt-2'>
                    <h1 className='font-[600] text-[20px]'>Retreats are made to Help You Connect With YourSelf</h1>
                </div>
      </div>

           })}
        </Slider>
      






    </div>
  )
}

export default ReadandInspiredSlider
