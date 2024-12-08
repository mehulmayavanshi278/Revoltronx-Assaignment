import Blogpage from "../../../components/Blogs/Blogpage"
import apiService from "../../../services/apiService";

export default  function index({blogs}){
    return (
        <>
           <Blogpage blogs={blogs}/>   
        </>
    )
}


export  async function getServerSideProps(context){
    try{
      const {query} = context;
      console.log(query);
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