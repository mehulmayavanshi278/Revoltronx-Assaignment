import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ProductSlider from './OursecionSlider';



function OurSesion({homeProducts}) {
  return (
    <div>
      <div className='lg:px-[100px] md:px-[50px] px-[40px] relative z-10 '>
         <div className='absolute w-[250px] top-[-190px] left-0 z-0'>
            <img className='lg:block hidden w-full' src=' https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/main-home-offset-img.png' alt=''/>
         </div>
         <div className='z-10 relative'>
            <h1 className='lg:text-[40px] md:text-[32px] text-[28px] font-[700px] tracking-wide'>Season Collection</h1>
         </div>

         <div className='mt-5'>



            <ProductSlider homeProducts={homeProducts}/>

         </div>

      </div>
    </div>
  )
}

export default OurSesion
