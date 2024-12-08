import AllBanner from "../../../../components/AdminAllPages/Banner/AllBanner";
import apiService from "../../../../services/apiService";

export default function index({data}){
    console.log(data)
    return(
        <AllBanner banners={data}/>
    )
}




export async function getServerSideProps(context) {
  

    try{
      const { query } = context;
      console.log(query);
      const {param} = query;
      console.log(param);
      const res= await apiService.getAllBaners();
      console.log("shops" , res.data);
  
      return {
        props: {
          data:res.data,
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