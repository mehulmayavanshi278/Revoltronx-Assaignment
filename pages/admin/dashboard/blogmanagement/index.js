import AllBlogs from "../../../../components/AdminAllPages/Blogs/AllBlogs";
import apiService from "../../../../services/apiService";


export default function index({blogs}){
    console.log("from admin main:" , blogs)
    return(
        <AllBlogs blogs={blogs}/>
    )
}


export  async function getServerSideProps(context){
    try{
      const {query} = context;
      console.log("queru params is:" , query);
      const res = await apiService.getAllBlogs(query);


      
        return {
            props:{
              blogs:res.data,
            }
          }
      
    }catch(err){
        console.log(err);
        return {
            props:{
              data:[]
            }
          }
        
    }
}


