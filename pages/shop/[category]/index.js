import { useEffect } from "react";
import Shoppage from "../../../components/shop/Shoppage";
import apiService from "../../../services/apiService";

  

export default function Shop({data}) {
  useEffect(()=>{

  },[]);
  console.log("data from" , data);
   return(
    <>
      <Shoppage products={data}/>
    </>
   )
}

export async function getServerSideProps(context) {
  

  console.log("hello bab");

  try{

    const { query } = context;
    console.log(query);
    const {param} = query;
    console.log("param" , param);
    let obj = {};
    if(query.type==="category") obj['type'] = "category";
    if(query.type==="tags") obj['type'] = "tags";
    obj["val"] = query.val;

    if(query.sortBy) obj['sortBy'] = query.sortBy;
    if(query.minPrice){
      obj['minPrice'] = query.minPrice;
      obj['maxPrice'] = query.maxPrice;
    } 
    console.log("obj" , obj)
    const res= await apiService.getShopData(obj);
    
    // console.log("shops" , res.data);
    return {
      props: {
        data:res.data,
        

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


