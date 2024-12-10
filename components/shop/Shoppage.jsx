import React, { useEffect, useState , useRef} from "react";
import { Slider, Typography, Box, Hidden, duration } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {motion} from 'framer-motion'
import apiService from "../../services/apiService";
import { useRouter } from "next/router";
import { Pagination } from "@mui/material";
import { toast } from "react-toastify";
import { useCart } from "../../context/cartConext/CartProvider";


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
  
function Shoppage({products}) {

  const {fetchCartItems} = useCart();
  console.log("p" , products);
  const router = useRouter();
 const containerVariants = {
  hidden:{opacity:0},
  visible:{
    opacity:1 ,
    transition:{
     staggerChildren:0.29
  } }
 } 

 const childVariants = {
  hidden:{opacity:0 , y:20},
  visible:{opacity:1 , y:0 , transition:{duration:1}}
 }
 const timeoutRef = useRef(null);
 const [priceRange, setPriceRange] = useState([10, 2000]);
 const [sortOption, setSortOption] = useState("");
 const [sortedProducts, setSortedProducts] = useState(products);
 const [currentPage, setCurrentPage] = useState(1); // Track the current page
 const [totalPages, setTotalPages] = useState(Math.ceil(sortedProducts.length/9)); 

 const handlePageChange = (event, page) => {
  setCurrentPage(page); // Update current page
  console.log(`Selected page: ${page}`);
};
  
    const handleSliderChange = async(event, newValue) => {
      console.log(newValue);
      setPriceRange(newValue);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      let url = window.location.href;

      timeoutRef.current = setTimeout(() => {
        router.push({
          pathname: router.pathname, // Keep the current route
          query: { ...router.query, minPrice: newValue[0] , maxPrice:newValue[1] }, // Add the new sortOption to the query
        } , undefined , {shallow : true});
        const queryParams = router.query;
        console.log(queryParams);
         fetchSortedProducts({...queryParams , minPrice:newValue[0] , maxPrice:newValue[1]});
      }, 500);
    };

  const handleChange = async(event) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);

    // Update the URL with the new query parameter for sortOption
    router.push({
      pathname: router.pathname, // Keep the current route
      query: { ...router.query, sortBy: selectedSortOption }, // Add the new sortOption to the query
    }, undefined , {shallow : true}); 

  };

  const fetchSortedProducts = async (sortObj) => {
    try {
      const response = await apiService.getShopData(sortObj);
      console.log(response.data);
      setSortedProducts(response.data); // Assuming the API returns the sorted products
      setTotalPages(Math.ceil(response.data.length/9))
      // setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching sorted products", error);
    }
  };

  const handleAddToCart = async(id)=>{
    try{
      const obj = {
        productId:id,
        quantity:1
      } 
      const res = await apiService.addToCart(obj);
      console.log(res);
      if(res.status===200){
        toast.success("one Item Added To Cart");
        fetchCartItems();
        
      }
    }catch(err){
       if (err.response && err.response.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        console.log(err);
      }
      console.log(err);
    }
  }

  const [isopenImg , setIsOpenImg ] = useState(false);
  const [openImg , setOpenImg] = useState("")

  useEffect(() => {
    if (sortOption) {
      const queryParams = router.query;
      console.log(queryParams);
      fetchSortedProducts({...queryParams , sortBy:sortOption});  
    }
  }, [sortOption]);
  return (
    <>
      <div className="pb-[50px]">

    { isopenImg && <div className=" shadow-lg fixed rounded-lg antialiased inset-0 dark:bg-gray-800 bg-gray-500 bg-opacity-70 z-50 flex items-center justify-center">
        
          <div className="relative bg-white w-full max-w-md rounded-lg shadow-lg ">
      

            <div className="lg:w-[500px] relative md:w-[420px] w-[260px] mx-auto ">
            <button
              onClick={()=>{setOpenImg("");setIsOpenImg(false)}}
              className="absolute z-60 top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
              <img className="max-h-[90vh]" src={openImg} alt=""/>
            </div>
       </div>
       </div>}
        <div className="relative h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/06/TA-Shop.jpg"
            alt=""
          />
          <div className="absolute top-1/2 md:left-[100px] left-[89px]  -translate-x-[100px] -translate-y-1/2">
            <div className="lg:px-[100px] md:px-[50px] px-[40px]">
              <p className="text-[15px] font-[500]">Shop / Yoga Equipment</p>
            </div>
          </div>
        </div>

        <div className="mt-[50px] lg:px-[100px] md:px-[50px] px-[40px]">
        <div className="grid lg:grid-cols-[1fr,400px] gap-x-[15px]">
           <div className="">
           <div className="md:flex flex-row justify-between items-center">
        <div className="">
            <p className="text-[15px] font-[500]">Showing {Math.min(sortedProducts.length , currentPage===totalPages ? sortedProducts.length%9 : 9)} of {sortedProducts.length} result</p>
          </div>
          <div className="">
            <div className="md:flex justify-end items-center my-4">
              <FormControl className="min-w-[200px] w-full" size="small">
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
                  <MenuItem value="price_high">Price: High to Low</MenuItem>
                  <MenuItem value="price_low">Price: Low to High</MenuItem>
                  <MenuItem value="createdAt_desc">Newest</MenuItem>
                  <MenuItem value="ratings_desc">Popularity</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
       
       <div className="">

       
        <motion.div
         variants={containerVariants}
         initial='hidden'
         animate='visible'
         className="mt-[20px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-8">
  {sortedProducts?.slice((currentPage-1)*9 , Math.min(sortedProducts.length  , (currentPage*9))).map((elm , index) => (
    
    <motion.div
     variants={childVariants}
     key={index} className="w-full group relative">
      {/* Image Container */}
      <div className="w-full h-[360px] relative">
        <img
          onClick={()=>{router.push(`/shop/${elm['category'][0]}/${elm._id}`)}}
          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-20"
          src={elm?.images[0] || ""}
          alt="Product"
        />
        <div className="absolute top-3 right-5 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:right-5">
          <div className="w-[50px] z-20 bg-white rounded-full h-[50px] flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300 group-hover:translate-x-0 translate-x-5" onClick={()=>{setIsOpenImg(true);setOpenImg(elm.images[0])}}>
            <RemoveRedEyeIcon style={{ fontSize: '24px' }} />
          </div>
          <div onClick={()=>{handleAddToCart(elm._id)}} className="w-[50px] mt-3 z-20 bg-white hover:bg-black hover:text-white rounded-full h-[50px] flex justify-center items-center transition-all duration-300 group-hover:translate-x-0 translate-x-5">
            <FavoriteBorderIcon style={{ fontSize: '24px' }} />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        {/* Product Title and Price */}
        <div className="flex justify-between">
          <h1 className="text-[15px] font-[500]">{elm.name}</h1>
          <p className="text-[15px] font-[500]">{"₹"+elm.price}</p>
        </div>

        {/* Star Ratings */}
        <div className="mt-2 flex items-center space-x-1">
          <img src="/svg/fillstar.svg" alt="Filled Star" className="w-5 h-5" />
          <img src="/svg/fillstar.svg" alt="Filled Star" className="w-5 h-5" />
          <img src="/svg/fillstar.svg" alt="Filled Star" className="w-5 h-5" />
          <img src="/svg/halfFill.svg" alt="Half-Filled Star" className="w-5 h-5" />
          <img src="/svg/emptystar.svg" alt="Empty Star" className="w-5 h-5" />
        </div>
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
           <div className="lg:px-[50px] px-0">
    <Box sx={{  }}>
      <Typography gutterBottom variant="h6" component="div">
        Filter
      </Typography>
      
      {/* Display the selected price range */}
      <Box display="flex" justifyContent="space-between" sx={{ marginBottom: 2 }}>
        <Typography variant="body2" color="text.secondary">
          ${priceRange[0]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${priceRange[1]}
        </Typography>
      </Box>

      {/* MUI Slider */}
      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        min={10}
        max={2000}
        step={1}
        sx={{
          color: "#1976d2", // Color for the slider
          height: 8,
          "& .MuiSlider-thumb": {
            backgroundColor: "#1976d2",
            borderRadius: "50%",
            height: 20,
            width: 20,
          },
          "& .MuiSlider-rail": {
            opacity: 0.5,
            backgroundColor: "#ddd",
          },
        }}
      />
    </Box>


    <div className="mt-[30px]">
      <div className="">
        <h1 className="text-[#3e4939] font-[620] text-[22px]">Categories</h1>

        <ul className="mt-[10px]">
        {items?.map((elm,id)=>{
          return(
            <>
            <a href={`/shop/${elm}?type=category&val=${elm}`} key={id+"category"}  className="block text-[16px] font-[400]">{elm}</a>
            </>
          )
        })}
        </ul>
      </div>
    </div>

    <div className="mt-[40px]">
    <div className="">
        <h1 className="text-[#3e4939] font-[620] text-[22px]">Recent Products</h1>
    </div>

    {
        Array.from({length:2},(id)=>{
            return(
                <>
                <div className="w-[120px]">
    <div className="w-[120px] h-[160px] relative mt-3">
        <img
          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-40"
          src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/05/h1-blog-list-img5.jpg"
          alt="Product"
        />
        <div className="absolute top-3 right-5 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:right-5">
          <div className="w-[50px] z-20 bg-white rounded-full h-[50px] flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300 group-hover:translate-x-0 translate-x-5">
            <RemoveRedEyeIcon style={{ fontSize: '24px' }} />
          </div>
          <div className="w-[50px] mt-3 z-20 bg-white hover:bg-black hover:text-white rounded-full h-[50px] flex justify-center items-center transition-all duration-300 group-hover:translate-x-0 translate-x-5">
            <FavoriteBorderIcon style={{ fontSize: '24px' }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-2">
          <h1 className="text-[15px] font-[500]">Mat Bag</h1>
          <p className="text-[15px] font-[450]">$67</p>
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
                            
                                <a href={`/shop/${elm}?type=tags&val=${elm}`} className="px-2 py-[2px] hover:bg-white cursor-pointer transition-colors duration-300 rounded-[4px] bg-[#eae9e9] text-[13px] font-[500]">{elm}</a>
                            
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
    </>
  );
}



export default Shoppage
