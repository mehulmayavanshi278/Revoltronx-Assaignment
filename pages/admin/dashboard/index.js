import Dashboard from "../../../components/AdminAllPages/Dashboard/Dashboard";
import apiService from "../../../services/apiService";


export default function index({data}){

  return (

     <Dashboard data={data}/>

  );
};




export async function getServerSideProps(context) {
  

  try{
    const { query } = context;
    console.log(query);
    const {param} = query;
    console.log(param);
    const blogs= await apiService.getAllBlogs();
    const users= await apiService.getAllUsers();
    const products= await apiService.getShopData();
    
    console.log("blogs" , blogs.data.length);
    console.log("product" , products.data.length);
    console.log("blogs" , users.data.length);

    const noObject = {
      blogs:blogs.data.length,
      products:products.data.length,
      users:users.data.length
    }

    return {
      props: {
         data:noObject
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
