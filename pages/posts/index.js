import React , {useState , useEffect} from 'react';
import {motion} from 'framer-motion'
import apiService from '../../services/apiService';
import { useRouter } from 'next/router';
import { Button , TextField} from '@mui/material';

export default function index({posts}){
    console.log("from main"  , posts);
    const router = useRouter();
    const [postsData , setPostsData] = useState(posts);
    const [hashtagVal , setHashtagVal] = useState("");
    const handleInputChange = (e) => {
        setHashtagVal(e.target.value);
      };
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

      const handleButtonClick = async() => {
        if (hashtagVal) {
            router.push({
                pathname: router.pathname, // Keep the current route
                query: { hashtag : hashtagVal }, 
              }, undefined , {shallow : true});
           const res = await apiService.fetchInstagramPosts({hashtag:hashtagVal});
           setPostsData(res.data.data.items);
        }
      };
      useEffect(()=>{
           
            router.push({
                pathname: router.pathname, // Keep the current route
                query: { hashtag : "yoga" }, 
              }, undefined , {shallow : true});
        
 
      },[]);
    return(
        <>

        <div className='pb-[50px] px-[100px]'>


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

        <div className="flex items-center  space-x-4 p-4 mt-[50px]">
        <TextField
        label="Enter Hashtag"
        variant="outlined"
        value={hashtagVal}
        onChange={handleInputChange}
        className="w-[600px]"
      />
          <a
          onClick={handleButtonClick}
  title="Proceed to Checkout"
  className=" w-[200px] me-2 inline-flex  items-center justify-center rounded-lg bg-blue-700 px-5 py-4 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  role="button"
>
  Get Posts
</a>
    </div>
    <div className='py-[20px]'>
       <h1 className='text-[32px] font-[650]'>Recent {router?.query?.hashtag} Posts From Instagram</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]">
  {postsData.length > 0 &&
    postsData.map((post, index) => {    
      // Extract relevant data
      const isImage = post.media_type === 1;
      const isVideo = post.media_type === 2;
      const mediaUrl = (isImage ? post.image_versions.items[0].url : (post.video_versions ? post.video_versions[0].url : ""))  || (post.image_versions.items[0].url || "");
      console.log(mediaUrl);
      const captionText = post.caption ? post.caption.text : "No caption available";

      return (
        <div key={index} className="relative group overflow-hidden bg-gray-200 rounded-lg">
          {isVideo && (
            <video
              src={mediaUrl}
              alt={""}
              className="w-full h-auto group-hover:opacity-100 transition-opacity duration-300"
              controls
              onMouseEnter={(e) => e.target.play()}  // Play video on hover
              onMouseLeave={(e) => e.target.pause()}  // Pause video when hover ends
            />
          )}
          {!isVideo && (
            <img  
              className="w-full h-auto"  
              src={mediaUrl}
              alt={""}
              
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-2">
            <p>{typeof captionText !== 'object' && captionText?.slice(0, 70)}</p>
          </div>
        </div>
      );
    })}
</div>

    </div>
        </>
    )
}


export async function getServerSideProps(context){
    try{
      const {query} = context;
      const res = await apiService.fetchInstagramPosts({hashtag:"yoga"});
      

      return{
        props : {
          posts : res.data.data.items,
          
        } 
      }
    }catch(err){
  
        return{
            props:{
                posts : []
            }
           
        }
    }
}