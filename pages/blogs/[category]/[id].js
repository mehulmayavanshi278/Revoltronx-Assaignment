import RightCotainer from "../../../components/Blogs/RightCotainer";
import SingleblogSlider from "../../../components/Blogs/SingleblogSlider";
import apiService from "../../../services/apiService";


export default function Singleblog({singleBlogData}){
  console.log("singleblogData:" , singleBlogData);
    return(
        <>
            <div className="">
            <div className="">
        <div className="relative h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/06/TA-Shop.jpg"
            alt=""
          />
          <div className="absolute top-1/2 left-[100px]  -translate-x-[100px] -translate-y-1/2">
            <div className="lg:px-[100px] md:px-[50px] px-[40px] pt-[50px]">
              <p className="text-[15px] font-[500]">Shop / Yoga Equipment</p>
            </div>
          </div>
        </div>

        <div className="mt-[50px] lg:px-[100px] md:px-[50px] px-[25px]">
        
        <div className="grid lg:grid-cols-[1fr,400px] gap-x-[15px]">
           <div className="w-full min-w-0">

           <SingleblogSlider  singleBlogData={singleBlogData}/>




           </div>
           <div className="">
           <RightCotainer/>
           </div>

          

        </div>


        </div>
        
      </div>
            </div>
        </>
    )
}


export async function getServerSideProps(context){
  try{
    const {query} = context;
    console.log(query);
    const res = await apiService.getSingleBlog(query.id);
    

    
      return {
          props:{
            singleBlogData:res.data,
            
          }
        }
    
  }catch(err){
      console.log(err);
      return {
          props:{
            data:{}
          }
        }
      
  }
}