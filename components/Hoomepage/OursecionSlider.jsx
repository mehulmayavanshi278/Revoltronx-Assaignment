import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/router";

const ProductSlider = ({homeProducts}) => {

 
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1224, // Tablets and small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 980, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  return (
    <div className="relative mx-auto">
      
     <Slider {...settings} >
         {
          homeProducts?.map((elm,id)=>{
                return(
                    <>
                    <div key={elm._id} className='lg:w-[330px] w-full lg:h-[420px] h-[340px] shadow-lg  hover:scale-[1.08] transition-transform  duration-500 relative cursor-pointer rounded-[10px]' onClick={()=>{router.push(`/shop/${elm._id}?type=category&val=${elm._id}`)}}>
                 <img className='h-full w-full object-cover' src={elm.imgURL} alt=''/>
                 <div className='absolute w-full z-0 bottom-[30px] left-0 p-3 px-[25px]'>
                     <div className='flex flex-row w-full items-center justify-between space-x-2'>
                         <div className=''>   
                   
                            <button
                    
                    className=" bg-green-500 p-2 hover:bg-green-600 text-white font-bold  rounded-md  shadow-md transition-all duration-200"
                  >
                             <h1 className='text-[15px] font-[500]'>{elm._id}</h1>
                             <p className='text-[white] font-[400]  text-[15px]'>{elm.count} Items</p>
                  </button>
                         </div>
                         <div className='w-[50px] cursor-pointer  arrowBtn    duration-300 hover:scale-[1.1] hover:text-[white] transition-all rounded-[50%] bg-green-500 p-4 hover:bg-green-600 h-[50px] relative bottom-2 z-30 flex flex-row justify-center items-center'>
                             <ArrowRightAltIcon className="align-middle m-0 p-0"  style={{fontSize:'28px',color:'white',alignItems:'center',textAlign:'center'}}/>
                         </div>
                     </div>
                 </div>
            </div>
                    </>
                )
            })
         }
     </Slider>



    </div>
  );
};

export default ProductSlider;
