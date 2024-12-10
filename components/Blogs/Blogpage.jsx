import React, { useState , useEffect } from "react";
import { Slider, Typography, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import apiService from "../../services/apiService";
import { Pagination } from "@mui/material";

const tags = [
    "aero",
    "ashtanga",
    "Body",
    "Candle",
    "classes",
    "hatha",
    "health",
    "instructor",
    "Mind",
    "retreat",
    "vinyasa",
    "Yoga"
  ];

  const items = [
    "Yoga Equipment",
    "Aero",
    "Block",
    "Candle",
    "Scent",
    "Scrub",
    "Soap",
    "Vinyasa"
  ];



function Blogpage({blogs}) {
  const [sortOption, setSortOption] = useState("");
  const router = useRouter();
  const [sortedBlogs , setSortedBlogs] = useState(blogs);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.29, // Delay between child animations
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };
 
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [totalPages, setTotalPages] = useState(Math.ceil(sortedBlogs.length/9)); 
 
  const handlePageChange = (event, page) => {
   setCurrentPage(page); // Update current page
   console.log(`Selected page: ${page}`);
 };

  


    const handleChange = async(event) => {
      const selectedSortOption = event.target.value;
      setSortOption(selectedSortOption);
  
     
      router.push({
        pathname: router.pathname, // Keep the current route
        query: { ...router.query, sortBy: selectedSortOption }, 
      }, undefined , {shallow : true}); 
  
    };


    const fetchSortedProducts = async (sortObj) => {
      try {
        const response = await apiService.getAllBlogs(sortObj);
        console.log(response.data);
        setSortedBlogs(response.data); 
        setTotalPages(res.data.length/9);
      } catch (error) {
        console.error("Error fetching sorted products", error);
      }
    };


    useEffect(()=>{
      if (sortOption) {
        const queryParams = router.query;
        console.log(queryParams);
        fetchSortedProducts({...queryParams , sortBy:sortOption});  
      }
    } , [sortOption])
    
  return (
    <div>
            <div className="pb-[50px]">
        <div className="relative h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/06/TA-Shop.jpg"
            alt=""
          />
          <div className="absolute top-1/2 md:left-[100px] left-[85px]  -translate-x-[100px] -translate-y-1/2">
            <div className="lg:px-[100px] md:px-[50px] px-[30px]">
              <p className="text-[15px] font-[500]">Shop / Yoga Equipment</p>
            </div>
          </div>
        </div>

        <div className="mt-[50px] lg:px-[100px] md:px-[50px]  sm:px-[40px] px-[15px]">
        
        <div className="grid lg:grid-cols-[1fr,400px] gap-x-[15px]">
           <div className="">
           <div className="md:flex flex-row justify-between">
        <div className="">
            <p className="text-[15px] font-[500]">Showing 10 of 50 result</p>
          </div>
          <div className="">
            <div className="md:mt-0 mt-2 md:flex justify-end items-center">
            <FormControl className="min-w-[200px]" size="small">
                <InputLabel id="sort-select-label" className="text-gray-800">
                  Sort By
                </InputLabel>
                <Select
                  labelId="sort-select-label"
                  id="sort-select"
                  value={sortOption}
                  onChange={handleChange}
                  className="bg-white"
                >
                  <MenuItem value="">Sort by</MenuItem>
                  <MenuItem value="createdAt_desc">Newest</MenuItem>
                  <MenuItem value="ratings_desc">Popularity</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="">

        
        {(sortedBlogs.length==0) && 
      <>
      <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:0.8}}
       className="flex justify-center min-h-[400px] items-center w-full">
        <h1 className='text-[42px] font-[550] text-[black]'>No Data Found</h1>
      </motion.div>
      </>

    }
    
        <motion.div
      className="mt-[20px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >


      {sortedBlogs?.slice((currentPage-1)*9 , Math.min(sortedBlogs.length , (currentPage-1)*9+9))?.map((elm, index) => (
        <motion.div
          key={index + "helloworld"}
          className="mx-auto w-full"
          variants={childVariants}
        >
          <div className="md:h-[310px] h-[200px] relative">
            <img
            onClick={()=>{router.push(`/blogs/${elm['category'][0]}/${elm._id}`)}}
              className="w-full hover:opacity-40 transition-opacity duration-300 h-full object-cover"
              src={elm?.imges[0]}
              alt=""
            />
            <div className="absolute top-0 bg-white left-2 p-2">
              <p className="text-[16px] font-[550]">17 </p>
              <p className="text-[16px] font-[550]">June </p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-row justify-start space-x-2">
              <h1 className="text-[#3e4939] font-[400] text-[15px]">By Mehul</h1>
              <p className="text-[#3e4939] font-[400] text-[15px]">/</p>
              <p className="text-[#3e4939] font-[400] text-[15px]">{router?.query?.val || elm?.tags[0]}</p>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="font-[550] text-[18px]">
              {elm.title}
            </h1>
          </div>
        </motion.div>
      ))}
    </motion.div>
    <div className="">
<div className="flex justify-center mt-6">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </div>
</div>
    </div>


           </div>
           <div className="md:px-[50px] sm:px-[40px] px-[20px]">



    <div className="">
      <div className="">
        <h1 className="text-[#3e4939] font-[620] text-[22px]">Categories</h1>

        <ul className="mt-[10px]">
        {items?.map((elm,id)=>{
          return(
            <>
            <a href={`/blogs/${elm}?type=category&val=${elm}`} key={id+"category"}  className="block text-[16px] font-[400]">{elm}</a>
            </>
          )
        })}
        </ul>
      </div>
    </div>

    <div className="mt-[40px]">
    <div className="">
        <h1 className="text-[#3e4939] font-[620] text-[22px]">Recent Blogs</h1>
    </div>

    {
        Array.from({length:2},(elm ,id)=>{
            return(
                <>
                <div className={`w-[110px] ${id !== 0 ? 'mt-4' : 'mt-5'}`}>
        <div className='w-[110px] h-[160px] relative'>
            <img className='w-full hover:opacity-40 transition-opacity duration-300 h-full object-cover' src={'https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/05/h1-blog-list-img5.jpg'} alt=''/>
            <div className='absolute top-0 bg-white left-2 p-2'>
                <p className='text-[16px] font-[550]'>17 </p>
                <p className='text-[16px] font-[550]'>June </p>
            </div>

        </div>
        <div className='mt-3'>
                <div className='flex flex-row justify-start space-x-2'>
                    <h1 className='text-[#3e4939] font-[400] text-[15px]'>By Mehul</h1>
                    <p className='text-[#3e4939] font-[400] text-[15px]'>/</p>
                    <p className='text-[#3e4939] font-[400] text-[15px]'>Aero</p>
                </div>

            </div>
      </div>
                </>
            )
        })
    }


    </div>

    <div className="mt-[40px]">
        <div className="">
        <h1 className="text-[#3e4939] font-[620] text-[22px]">TAGS</h1>
        </div>
        <div className="flex flex-wrap gap-[8px] mt-3">
            {
                tags?.map((elm,id)=>{
                    return(
                        <>
                        <a href={`/blogs/${elm}?type=tags&val=${elm}`} className="px-2 py-[2px] hover:bg-white cursor-pointer transition-colors duration-300 rounded-[4px] bg-[#eae9e9] text-[13px] font-[500]">{elm}</a>
                        </>
                    )
                })
            }
        </div>
    </div>

           </div>
        </div>


        </div>
        
      </div>
    </div>
  )
}

export default Blogpage
