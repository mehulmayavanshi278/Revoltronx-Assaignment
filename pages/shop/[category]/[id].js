import React, {
    useEffect,
    useState
  } from "react";

  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

 import Ratings from "../../../components/shop/StarRating";
import {motion} from 'framer-motion'
import apiService from "../../../services/apiService";

// const singleProductData = {
//     name: "Yoga Mat Bag",
//     images: ["https://www.yogikuti.com/wp-content/uploads/2019/11/yoga-block-bamboo-3.jpg"],
//     price: 1500, // Base price
//     ratings: {
//       average: 4.5,
//       total: 123, // Total number of reviews
//     },
//     category: ["Yoga Accessories", "Bags"],
//     tags: ["Eco-Friendly", "Durable", "Water-Resistant"],
//     description: "This yoga mat bag is made from eco-friendly materials, designed to fit all standard yoga mats. It features a durable and water-resistant fabric with multiple compartments for accessories.",
//     additionalInformation: {
//       material: "Polyester",
//       dimensions: "72cm x 15cm x 15cm",
//       weight: "500g",
//       warranty: "1 Year",
//     },
//     vendorInfo: {
//       name: "Yoga Essentials Pvt Ltd.",
//       location: "Mumbai, India",
//       contact: "support@yogaessentials.com",
//     },
//   };
  

const Description = ({ description }) => {
    return (
      <>
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:1}}
         className="mt-3  w-[50%]">
          <p className="text-[14px] text-[#666]">{description}</p>
        </motion.div>
      </>
    );
  };
  
  const AdditionalInfo = ({ additionalInfo }) => {
    console.log(additionalInfo);
    useEffect(() => {}, []);
    return (
      <>
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:1}} className="py-4">
          <div className="grid grid-cols-[1fr,1fr] justify-center gap-2">
            <h1 className="text-center text-[#6f6363] font-[700]">Weight</h1>
            <h1 className="text-center text-black">{additionalInfo?.weight}</h1>
            <h1 className="text-center text-[#6f6363] font-[700]">Dimention</h1>
            <h1 className="text-center">{additionalInfo?.dimensions}</h1>
          </div>
        </motion.div>
      </>
    );
  };
  
  const VendorInfo = ({ vendorInfo }) => {
    return (
      <>
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:1}} className="py-4">
          <div className="">
            <h1 className="text-[black] text-[16px] font-[700]">
              vendor Name :
              <span className="text-[#666] text-[14px] font-[500] ">{vendorInfo?.name}</span>
            </h1>
            <h1 className="text-[black] text-[16px] font-[700]">
              contact :{" "}
              <span className="text-[#666] text-[14px] font-[500] ">
                {vendorInfo?.contact}
              </span>
            </h1>
            <h1 className="text-[black] text-[16px] font-[700]">
              Address :
              <span className="text-[#666]  text-[14px]font-[500] ">{vendorInfo?.location}</span>
            </h1>
          </div>
        </motion.div>
      </>
    );
  };



  function HoverZoomImage({ src, alt }) {
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseMove = (e) => {
      const { offsetX, offsetY, target } = e.nativeEvent;
      const { offsetWidth, offsetHeight } = target;
  
      const x = (offsetX / offsetWidth) * 100;
      const y = (offsetY / offsetHeight) * 100;
  
      setZoomPosition({ x, y });
    };
  
    return (
      <div
        className="relative w-full h-full overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={src}
          alt={alt}
          className={`absolute w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-150" : "scale-100"
          }`}
          style={{
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        />
      </div>
    );
  }

export default function SingleProduct({singleProductData}){
    console.log(singleProductData);
    const [activeTab, setActiveTab] = useState("DESCRIPTION");
    const tabs = [
      "DESCRIPTION",
      "SHIPPING",
      "ADDITIONAL INFORMATION",
      "VENDOR INFO",
      "MORE PRODUCTS",
      "RATINGS"
    ];
    return(
        <>
                <div className="pb-[50px]">
                <div className="relative h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/06/TA-Shop.jpg"
            alt=""
          />
          <div className="absolute top-1/2 left-[100px]  -translate-x-[100px] -translate-y-1/2">
            <div className="lg:px-[100px] md:px-[50px] px-[40px]  py-[50px]">
              <p className="text-[15px] font-[500]">Shop / Yoga Equipment</p>
            </div>
          </div>
        </div>
          <div className="lg:px-[100px] md:px-[50px] px-[40px] pt-[50px]">
            <div className="">
              <div className="bg-white">
                <div className="lg:grid grid-cols-[500px,1fr]">
                  <div className=" grid grid-cols-[100px,1fr] p-4">
                    <div className="">
                      {singleProductData?.images?.map((elm, id) => {
                        return (
                          <>
                            <div key={id+'divv'} className="md:w-[80px] md:h-[100px] w-[50px] h-[70px] border border-1px hover:border-black mt-1">
                              <img src={elm} alt="" />
                            </div>
                          </>
                        );
                      })}
                    </div>
                    <div className="md:w-[350px] md:h-[450px] w-[200px] mx-auto">
  <HoverZoomImage
    src={singleProductData?.images[0]}
    alt={singleProductData?.name || "Product Image"}
  />
</div>
                  </div>
                  <div className="p-4">
                    <div className="">
                      <h1 className="lg:text-[28px] md:text-[24px] text-[18px] font-[600]">
                        {singleProductData?.name}
                      </h1>

                      <div className="">
                        <div className="flex flex-row items-center pt-3">
                          <div className="">
                            {singleProductData?.ratings?.avarage}
                          </div>
                          <div className="">⭐</div>
                        </div>

                        <div className="w-[100px] h-[1px] bg-[black] my-3"></div>

                        <div className="">
                          <div className="flex flex-row gap-3 items-center">
                            <h1 className="text-gray-500 lg:text-[32px] md:text-[28px] text-[22px] line-through ">
                              ₹{(singleProductData?.price + 23).toFixed(2)}
                            </h1>
                            <h1 className="text-red-600 text-[38px]  font-semibold">
                              ₹{singleProductData?.price}
                            </h1>
                          </div>
                        </div>

                        <div className="mt-[40px]">
                          <div className="flex flex-row gap-1 justify-start">
                            <p className="text-[#666] font-[500] text-[14px]">
                              CATEGORY :{" "}
                            </p>
                            <div className="flex flex-wrap">
                              {singleProductData?.category?.map((elm, id) => {
                                return (
                                  <>
                                    <p className="text-[black] text-[14px] font-[600] mx-2">
                                      {" "}
                                      {elm}
                                    </p>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className="flex flex-row gap-1 justify-start mt-2">
                            <p className="text-[#666]  text-[14px] font-[500]">
                              TAGS :{" "}
                            </p>
                            <div className="flex flex-wrap">
                              {singleProductData?.tags?.map((elm, id) => {
                                return (
                                  <>
                                    <p className="text-[black] text-[14px] font-[600] mx-2">
                                      {" "}
                                      {elm}
                                    </p>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className="flex flex-row items-center gap-5 mt-[35px]">
                            {/* <div className="flex flex-row justify-start">
                               <div className="w-[45px] h-[55px] border border-1px flex flex-row justify-center items-center border-e-0">
                                <p className="text-[20px] text-[#666] font-[600]">-</p>
                               </div>
                               <div className="w-[45px] h-[55px] border border-1px flex flex-row justify-center items-center border-e-0">
                                <p className="text-[20px]">5</p>
                               </div>
                               <div className="w-[45px] h-[55px] border border-1px flex flex-row justify-center items-center ">
                                <p className="text-[20px] text-[#666] font-[600]">+</p>
                               </div>
                            </div> */}

                            <div
                              className="bg-black hover:bg-[blue] transition-all transition-0.8 cursor-pointer flex flex-row items-center justify-center gap-2 h-[55px] px-[35px]"
                            >
                              <ShoppingCartIcon
                                style={{ color: "white", fontSize: "20px" }}
                              />
                              <p className="text-center text-white text-[16px] rounded-[5px]">
                                Add to Cart
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <ul className="flex flex-wrap justify-start gap-4">
                      {tabs.map((tab, id) => (
                        <li
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`text-[14px] font-[700] text-[#666] py-2 ps-3 cursor-pointer ${
                            activeTab === tab
                              ? "border-b-2 border-red-600 text-red-500"
                              : "hover:text-red-500 hover:border-b-2 hover:border-red-600"
                          }`}
                        >
                          {tab}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#9e9d9d] h-[1px] "></div>

                  <div className="px-4">
                    {activeTab === "DESCRIPTION" && (
                      <Description
                        description={singleProductData?.description}
                      />
                    )}
                    {activeTab === "SHIPPING" && (
                      <div>Shipping content goes here</div>
                    )}
                    {activeTab === "ADDITIONAL INFORMATION" && (
                      <AdditionalInfo
                        additionalInfo={
                          singleProductData?.additionalInformation
                        }
                      />
                    )}
                    {activeTab === "VENDOR INFO" && (
                      <VendorInfo vendorInfo={singleProductData?.vendorInfo} />
                    )}
                    {activeTab === "MORE PRODUCTS" && (
                      <div>More products content goes here</div>
                    )}
                    {activeTab === "RATINGS" && (
                      <Ratings singleProductData={singleProductData} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}


export async function getServerSideProps(context) {
  try{
   
    let {query} = context;
    console.log(query);
    let {id} = query;
    const res= await apiService.getSingleShop(id);
    

    console.log(res);
    return {
      props: {
        singleProductData:res.data,
        
      },
    };
  }catch(err){
    return {
      props:{
        data:["nothing"]
      }
    }
  }
}