import { Button } from '@mui/material';
import React , {useRef, useState , useEffect} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useRouter } from "next/router";
import ProductModal from '../shop/ProductModal';
import apiService from '../../services/apiService';
import CancelIcon from '@mui/icons-material/Cancel';
import TokenHelper from '../../Helpers/TokenHelper';
import { useCart } from '../../context/cartConext/CartProvider';


function Navbar({ }) {

   const router = useRouter();
 const {fetchCartItems , cartProducts} = useCart();

  const [user , setUser] = useState()
  // const [cartProducts , setCartProducts] = useState();
  const [isOpenCart , setIsOpenCart] = useState(false); 
  const [isOpenProfile , setIsOpenProfile] = useState(false); 
  const cartRef = useRef(null);
  const profileRef = useRef(null);

  const openPop = (val)=>{

   if(val==="cart"){
      if(isOpenCart){
         closePop();
         return;
      } 
      setIsOpenCart(true);
      setIsOpenProfile(false)
   }else{
      if(isOpenProfile){
         closePop();
         return;
      }
      setIsOpenCart(false);
      setIsOpenProfile(true)
   }

  }

  const product = {
    name: "Yoga Mat Pro",
    price: 1500,
    images: [
      "https://images.unsplash.com/photo-1586281380421-34fe4b0aa0dd?crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const closePop = ()=>{
   setIsOpenCart(false);
   setIsOpenProfile(false);
  }

  const [quantity , setQuantity] = useState();
  const handleIncrement = ()=>{

  }
  const handleDecrement = ()=>{

  }

  const refreshCart = async()=>{
     console.log("refresh me");
     try{
        fetchCartItems()
     }catch(err){
      console.log(err);
     }
  } 

  const handleRemoveItem = async(id)=>{
    console.log("click")
    try{
     const userId = "674fe2e906eefe14bb48e71d";
     const res = await apiService.removeFromCart(id , userId);
     if(res.status===200){
      console.log(res.data);
      fetchCartItems();
     }
    }catch(err){
      console.log(err);
    }
  }


  const handleOnClose = ()=>{
    console.log("clicked here");
    setIsModalOpen(false);
    setSelectedProduct(null);
  }

  const [isOpenMenu , setIsOpenMenu] = useState(false);

  const openMenu  = ()=>{
    setIsOpenMenu(true);
  }

  const getUser = async()=>{
    try{
      const res = await apiService.getUsers();
      if(res.status===200){
        console.log("user:" , res.data);
        setUser(res.data);
      }
    }catch(err){
      console.log(err);
    }
  }





  useEffect(()=>{
   if(TokenHelper.get()){
    getUser();
    fetchCartItems()
   }
  },[]);

 

  useEffect(()=>{
    setIsClient(true);
  },[isModalOpen])


  const [isClient, setIsClient] = useState(false);
  if (!isClient) {
    return null; // Or you could render a placeholder button, e.g., "Loading..."
  }

  return (
    <div>
     <div className=''>
        <div className=' bg-[white] relative lg:px-[100px] md:px-[40px] px-[10px] text-black lg:grid xl:grid-cols-[1fr,400px] grid-cols-1 flex justify-between items-center md:gap-x-[100px]  py-2'>
              <div className='flex flex-row justify-between items-center'>
                  <div className=''>
                    <div className='w-[70px]'>
                        <img className='w-full object-cover rounded-[50%]' src='/images/logom.png' alt=''/>
                    </div>
                  </div>

<div className={`lg:relative  duration-300 bg-white lg:shadow-none shadow-lg rounded-b-lg md:z-0 z-20 lg:p-0 p-4 absolute lg:w-auto w-full transition-all ${isOpenMenu ? 'top-0' : 'lg:top-0 top-[-500px]'}  left-0 `}>
  <div className='absolute z-20 right-[10px] top-[10px]'>
  <button onClick={()=>{setIsOpenMenu(false)}} type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex lg:hidden  items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
          <CancelIcon/>              
        </button>
  </div>
   <ul className='flex  lg:flex-row flex-col lg:items-center lg:space-x-[70px] lg:space-y-0  text-[16px] font-[450]'>
      <a href='/' className='lg:hover:bg-transparent hover:bg-gray-100 py-2 text-[16px] font-[500] relative cursor-pointer group tracking-wide'>
         Home
         
         <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300'></span>
      </a>
      <a href='/shop' className='lg:hover:bg-transparent hover:bg-gray-100 py-2 text-[16px] font-[500] relative cursor-pointer group tracking-wide'>
         Shop
         <span className='text-[16px] font-[500] absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300'></span>
      </a>
      <a href='/books' className='lg:hover:bg-transparent hover:bg-gray-100 py-2 text-[16px] font-[500] relative cursor-pointer group tracking-wide'>
         Books
         <span className='text-[16px] font-[500] absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300'></span>
      </a>
      <a href='/posts' className='lg:hover:bg-transparent hover:bg-gray-100 py-2 text-[16px] font-[500] relative cursor-pointer group tracking-wide'>
         Posts
         <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300'></span>
      </a>
      <a href='/blogs' className='lg:hover:bg-transparent hover:bg-gray-100 py-2 text-[16px] font-[500] relative cursor-pointer group tracking-wide'>
         Blogs
         <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300'></span>
      </a>
   </ul>
</div>


              </div>
              <div className=''>
                <div className='flex flex-row justify-end space-x-2 items-center'>
{     !TokenHelper.get()          && <div className="relative group z-10 cursor-pointer" onClick={()=>{router.push('/login')}}>
                <button type="button" className="py-2 px-2 cursor-pointer  text-sm font-[10px] text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <img className="profileIcon   cursor-pointer" src="/svg/profile.svg" alt="" />
                 </button>
   <div className="absolute z-10 bottom-[-10px] left-0 bg-black rounded-[4px] px-2 py-1 shadow-md opacity-0 group-hover:opacity-100 transform group-hover:translate-y-[28px] translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
      <p className="text-[16px] text-white font-[600]">Login</p>
   </div>

</div>}

<div className=''>
<div className=''>
   <button type="button" className="py-2 px-2  text-sm font-[10px] text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      {/* <DarkModeIcon/> */}
      <LightModeIcon/>
   </button>
   </div>
</div>

<div className="flex items-center lg:space-x-2">
        <div className='relative z-10'> 
        <button onClick={()=>{openPop("cart")}} id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
          <span className="lg:block hidden sr-only">
            Cart
          </span>
          <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg> 
          <span className="lg:block hidden sm:flex">My Cart</span>
          <svg className="hidden lg:block sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>   

        </button>
        { isOpenCart && <div ref={cartRef} id="myCartDropdown1" className="absolute w-[250px] sm:right-0 right-[-35px] z-10 mx-auto max-w-sm space-y-4  rounded-lg bg-white p-4 px-0 antialiased shadow-lg dark:bg-gray-800">
         {
          cartProducts?.items?.map((elm,id)=>{
            return(
              <>
              <div  key={id + 'cartitems'} className="grid grid-cols-2 cursor-pointer px-4 relative py-1 hover:bg-gray-100 m-0" onClick={(e) =>{ e.stopPropagation(); setIsModalOpen(true);setSelectedProduct(elm);}}>
            <div>
            <div className='flex flex-row justify-start space-x-2 items-start'>
               <div className='w-[50px] h-[50px]'>
                <img
                 className='w-ful h-full rounded-md  object-cover'
                 src={elm?.productId?.images[0]}
                alt='img'
                />
     
                 

               </div>
               <div className=''>
                <p  className="truncate text-sm font-semibold  text-gray-900 dark:text-white hover:underline relative group" >{elm?.productId.name.slice(0,9)}
                </p>
                <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">₹{elm.quantity * elm?.productId.price}</p>

                </div>
            </div>
    

              
            </div>
      
            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: {elm.quantity}</p>
      
              <button onClick={(e)=>{e.stopPropagation();handleRemoveItem(elm.productId._id)}} data-tooltip-target="tooltipRemoveItem1a" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span className="sr-only"> Remove </span>
                <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                </svg>
              </button>
              <div id="tooltipRemoveItem1a" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" >
                Remove item
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>

          </div>
              </>
            )
          })
         }

         { selectedProduct &&  <ProductModal
        product={selectedProduct}
        refreshCart={()=>{refreshCart()}}
        isOpen={isModalOpen}
        onClose={()=>{handleOnClose()}}
      />}
    
      <div className='px-4'>
       <h1>Total Price : <span> ₹{cartProducts?.totalPrice}</span></h1>
      </div>

         
      <div className='px-4'>
      <a
  href="#"
  title="Proceed to Checkout"
  className="mb-2  me-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  role="button"
>
  Proceed to Checkout
</a>
      </div>

        </div>}
        </div>


    { TokenHelper.get() &&  <div className='relative'>
               <button onClick={()=>{openPop("profile")}} id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
          <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>  
          <a className='lg:block hidden'>
          {user?.firstName}
          </a>            
          
          <svg className=" lg:block hidden w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg> 
        </button>
    {  isOpenProfile &&  <div ref={profileRef} id="userDropdown1" className="absolute z-10 w-56 right-0 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
          <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </a></li>
          </ul>
      
          <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
            <a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </a>
          </div>
        </div>}

       </div>}


       
        <button onClick={openMenu} type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex lg:hidden  items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">

          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>                
        </button>
      </div>
   


                </div>
              </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar
