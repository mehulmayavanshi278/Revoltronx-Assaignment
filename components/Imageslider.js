import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// const slideItems = [
//   {
//     img: "https://www.yogikuti.com/wp-content/uploads/2024/07/yogo_banner_2.webp",
//     firstText: "Align Yourself",
//     secondText: "Yoga Props",
//   },
//   {
//     img: "https://www.yogikuti.com/wp-content/uploads/2024/07/yogo_banner_3.webp",
//     firstText: "Designed By Professionals",
//     secondText: "100% Cotton",
//   },
// ];

const ImageSlider = ({banner=[]}) => {

  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasAnimated, setHasAnimated] = useState([true, ...Array(Math.max(0, banner.length - 1)).fill(false)]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
    beforeChange: (current, next) => {
      setActiveSlide(next);
      console.log(current);
      console.log(next);
      // Update the animation status for the next slide
      setHasAnimated((prev) => {
        const updated = [...prev];
        updated[next] = true;
        return updated;
      });
    },
  };

  return (
    <div className="relative m-0 p-0 overflow-x-hidden">
      <Slider {...settings}>
        {banner?.map((elm, id) => (
          <div key={id+'rela'} className="relative   overflow-hidden">
            {/* Image Animation */}
            <motion.div
              className=" w-full relative"
              initial={{ opacity: 0 }}
              animate={
                activeSlide === id || hasAnimated[id]
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 1 }}
            >
              <img
                className="w-full md:h-[600px] h-[300px] object-cover"
                src={elm.imgURL}
                alt="Banner"
              />
            </motion.div>

            {/* Text and Button Animation */}
            <motion.div
              className="absolute top-1/2 md:left-[300px] left-[50px] -translate-x-0 -translate-y-1/2"
              initial="hidden"
              animate={
                activeSlide === id || hasAnimated[id] ? "visible" : "hidden"
              }
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3, // Stagger animations for child elements
                  },
                },
              }}
            >
              {/* First Text */}
              <motion.h1
                className="lg:text-[19px] text-[16px]  font-[620] tracking-wide"
                initial={{ x: -100, opacity: 0 }}
                animate={
                  activeSlide === id || hasAnimated[id]
                    ? { x: 0, opacity: 1 }
                    : { x: -100, opacity: 0 }
                }
                transition={{ duration: 0.8 }}
              >
                {elm.title}
              </motion.h1>

              {/* Second Text */}
              <motion.h1
                className="lg:text-[58px] md:text-[42px] text-[26px] font-[600] tracking-wide mt-3"
                initial={{ x: 100, opacity: 0 }}
                animate={
                  activeSlide === id || hasAnimated[id]
                    ? { x: 0, opacity: 1 }
                    : { x: 100, opacity: 0 }
                }
                transition={{ duration: 0.8 }}
              >
                {elm.description}
              </motion.h1>

              {/* Button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={
                  activeSlide === id || hasAnimated[id]
                    ? { y: 0, opacity: 1 }
                    : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.8 }}
              >
                <button  onClick={()=>{router.push(`/shop/${elm.category}?type=category&val=${elm.category}`)}} className="py-[10px] px-[30px] font-[420] mt-4 hover:bg-[black] hover:text-white transition-all duration-300 text-[18px] tracking-wide border border-solid border-black rounded-[6px]">
                  Shop Now
                </button>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
