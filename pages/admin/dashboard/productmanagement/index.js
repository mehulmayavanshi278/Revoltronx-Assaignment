import Productslist from "../../../../components/AdminAllPages/ProductManagement/Productslist";
import apiService from '../../../../services/apiService'


export default function index({data}){
    return(
        <>
            <Productslist products={data}/>
        </>
    )
}




export async function getServerSideProps(context) {
  

    try{
      const { query } = context;
      console.log(query);
      const {param} = query;
      console.log(param);
      const res= await apiService.getShopData();
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
  