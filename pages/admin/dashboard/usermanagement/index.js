import Alluser from "../../../../components/AdminAllPages/UserManagement/Alluser";
import apiService from "../../../../services/apiService";


export default function index({data}){
    console.log("users:" , data);
    return (
        <>
            <Alluser users={data}/>
        </>
    )
}



export async function getServerSideProps(context) {
  

    try{
      const { query } = context;
      console.log(query);
      const {param} = query;
      console.log(param);
      const res= await apiService.getAllUsers();
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