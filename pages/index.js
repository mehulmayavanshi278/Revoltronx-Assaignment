import { useEffect, useState } from "react";
import ImageSlider from "../components/Imageslider";
import OurSesion from "../components/Hoomepage/OurSesion";
import YogaInstructor from "../components/Hoomepage/YogaInstructor";
import ReadandInspired from "../components/Hoomepage/ReadandInspired";
import apiService from "../services/apiService";
import axios from "axios";


export default function Home({ banner , blogs , homeProducts}) {



  
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const json = await res.json();
    setResponse(json.message);
  };

  useEffect(()=>{

  },[]);
  return (
    <>
    <div className="w-full  py-2 pt-0">
      <ImageSlider  banner={banner}/>
      <OurSesion homeProducts={homeProducts}/>
      <YogaInstructor/>
      <ReadandInspired blogs={blogs}/>
    </div>
    </>
  );
}

export async function getServerSideProps() {
  try{
 
   const banner = await apiService.getAllBaners();
  //  const blogs = await apiService.getAllBlogs();
  //  const homeProducts = await apiService.getHomeSeasonCollection();


    return {
      props: {
        banner : banner.data,
        // blogs : blogs.data,
        // homeProducts:homeProducts.data,
      },
    };
  }catch(err){
    return {
      props:{
        data:[]
      }
    }
  }

}
