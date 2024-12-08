import axios from "axios";
import TokenHelper from "../Helpers/TokenHelper";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;

class apiService {

  getUsers = async() => {

    console.log("token is:" , TokenHelper.get())
    return axios.get(BaseURL + '/api/user/user?action=getUser' , {
      headers:{
        Authorization:TokenHelper.get()
      }
    });
  }
  
  getAllUsers =  async() => {
    return axios.get(BaseURL + '/api/user/user?action=getAllUser');
  }

  login =  (credentials) => {
    return axios.post('/api/user/user?action=login', credentials);
  }

  signup =  (userDetails) => {
    return axios.post('/api/user/user?action=signup', userDetails);
  }

  // updateUser: (id, updatedData) => {
  //   return axios.put(`/api/user/${id}?action=updateUser`, updatedData);
  // }

  // deleteUser: (id) => {
  //   return axios.delete(`/api/user/${id}?action=deleteUser`);
  // }

  getOtp =  async (obj) => {
    return axios.post('/api/user/user?action=getOtp' , obj);
  }

  verifyOtp = async (otpDetails) => {
    return axios.post('/api/user/user?action=verifyOtp', otpDetails);
  }


  // shop page apis
  getShopData = async (obj) =>{
    console.log(obj);
    return axios.get(BaseURL + "/api/shop?action=getAllShop" , {
      params:obj
    });
  }

  getSingleShop = async(id)=>{
    return axios.get(BaseURL +  `/api/shop/${id}`);
  }

  addToCart = async(obj)=>{
    return axios.post(BaseURL + '/api/cart' , obj , {
      headers:{
        Authorization:TokenHelper.get()
      }
    });
  }
  getAllCartItems = async()=>{
    return axios.get(BaseURL + `/api/cart` , {
      headers:{
        Authorization:TokenHelper.get()
      }
    });
  }
  updateCart = async(id , obj)=>{
    return axios.post(BaseURL + `/api/cart/${id}` , obj , {
      headers:{
        Authorization:TokenHelper.get()
      }
    });
  }
  removeFromCart = async(id)=>{
    return axios.delete(BaseURL + `/api/cart/${id}?` , {
      headers:{
        Authorization:TokenHelper.get()
      }
    });
  }


  getAllBlogs = async(obj)=>{
    console.log("blog params" , obj)
    return axios.get(BaseURL + "/api/blog" , {
      params:obj
    })
  }
  getSingleBlog = async(id)=>{
    return axios.get(BaseURL + `/api/blog/${id}`);
  }

  fetchInstagramPosts = async(obj)=>{
    console.log("obj" , obj);
    const options = {
      method: 'GET',
      url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/hashtag',
      params: obj,
      headers: {
        'x-rapidapi-key': '55fb5994bfmshba7f5c803fe38cbp17e113jsnb680d7eaf3f4',
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
      }
    };
      return axios.request(options);
    };


    // home page apis
    getAllBaners = async()=>{
      return axios.get(BaseURL + "/api/banner");
    }
    createBenner = async(obj)=>{
      return axios.post(BaseURL + "/api/banner" , obj);
    }
    updateBanner = async(id , obj)=>{
      return axios.post(BaseURL + `/api/banner/${id}` , obj);
    }
    getHomeSeasonCollection = async()=>{
      return axios.get(BaseURL + "/api/shop?action=getHomeSeasonCollection");
    }





  }
  

;

export default new apiService();
