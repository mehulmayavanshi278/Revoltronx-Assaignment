import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SingleblogSlider({singleBlogData}) {
  const settings = {
    infinite: true,
    slidesToShow: 1, // Adjust this to fit the responsive behavior
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full relative pb-[50px]">
                <div className='absolute z-20 top-0 bg-white left-2 p-2'>
                <p className='text-[16px] font-[550]'>17 </p>
                <p className='text-[16px] font-[550]'>June </p>
            </div>
      <Slider {...settings}>
        {singleBlogData?.imges?.map((elm, id) => (
          <div key={id} className=" relative w-full md:h-[500px] h-[200px]" >
            <img src={elm} alt="" className="w-full h-full object-cover" />

          </div>
        ))}
      </Slider>

      <div className='mt-3'>
      <div className="flex flex-row justify-start space-x-2">
  <h1 className="text-[#3e4939] font-[400] text-[15px] relative group">
    By Mehul
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3e4939] transition-all duration-300 group-hover:w-full"></span>
  </h1>
  <p className="text-[#3e4939] font-[400] text-[15px]">/</p>
  <p className="text-[#3e4939] font-[400] text-[15px] relative group">
    {singleBlogData?.tags[0]}
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3e4939] transition-all duration-300 group-hover:w-full"></span>
  </p>
</div>

                </div>

                <div className='text-[#3e4939] mt-2'>
                    <h1 className='md:text-[34px] text-[22px] font-[580]'>{singleBlogData?.title}</h1>
                    <p className='md:text-[16px] text-[14px] font-[400] md:mt-[15px] mt-[9px]'>
                    {singleBlogData?.description}
                    </p>
                </div>
                <div className='text-[#3e4939] mt-2'>
                    <h1 className='md:text-[34px] text-[22px] font-[580]'>{singleBlogData?.secondTitle}</h1>
                    <p className='md:text-[16px] text-[14px] font-[400] md:mt-[15px] mt-[9px]'>
                    {singleBlogData?.secondDescription}
                    </p>
                </div>

                <div className='mt-[25px] md:h-[500px] h-[200px]'>
                  <img className='w-full h-full object-cover' src='https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/blog-single-img1.jpg' alt=''/>
                </div>

                <div className='text-[#3e4939] mt-2'>
                    <h1 className='md:text-[34px] text-[22px] font-[580]'>{singleBlogData?.thirdTitle}</h1>
                    <p className='md:text-[16px] text-[14px]  font-[400] md:mt-[15px] mt-[9px]'>
                    {singleBlogData?.thirdDescription}
                    </p>
                </div>

    </div>
  );
}

export default SingleblogSlider;
