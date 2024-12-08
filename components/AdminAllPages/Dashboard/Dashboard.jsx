import React, { useEffect, useState } from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import GroupIcon from '@mui/icons-material/Group';



function Dashboard({data}) {


 



  useEffect(()=>{

    
  },[]);

  return (
    <div>
      <div className=''>
         <div className='grid grid-cols-4 gap-[25px]'>

            <div className={` shadow-sm p-[25px] bg-white lg:col-span-1 col-span-2 rounded-[15px] `}>
            <div className='flex flex-row gap-[15px]'>

           
              <div className='w-[50px] h-[50px] bg-green-600 flex flex-row justify-center items-center'>
              <TrendingUpIcon style={{fontSize:"40px",color:"white"}}/>
              </div>
              <div className=''>
                <div className=''>
                    <p className='text-[14px] font-[400] text-[#728872]'>Total Users</p>
                </div>
                <div className=''>
                    <h1 className='text-[24px] font-[600] '>{data?.users}</h1>
                </div>
                </div>
              </div>
              <div className='mt-[40px] h-[4px] bg-[navy]'></div>
            </div>
            <div className={` shadow-sm   bg-white  p-[25px] lg:col-span-1 col-span-2 rounded-[15px] `}>
            <div className='flex flex-row gap-[15px]'>

           
              <div className='w-[50px] h-[50px] bg-green-600 flex flex-row justify-center items-center'>
              <CurrencyRupeeIcon style={{fontSize:"40px",color:"white"}}/>
              </div>
              <div className=''>
                <div className=''>
                    <p className='text-[14px] font-[400] text-[#728872]'>Total Products</p>
                </div>
                <div className=''>
                    <h1 className='text-[24px] font-[600] '>{data?.products}</h1>
                </div>
                </div>
              </div>
              <div className='mt-[40px] h-[4px] bg-[navy]'></div>
            </div>
            <div className={` bg-white shadow-sm p-[25px] lg:col-span-1 col-span-2 rounded-[15px] `}>
            <div className='flex flex-row gap-[15px]'>

           
              <div className='w-[50px] h-[50px] bg-green-600 flex flex-row justify-center items-center'>
              <NoteAddIcon style={{fontSize:"40px",color:"white"}}/>
              </div>
              <div className=''>
                <div className=''>
                    <p className='text-[14px] font-[400] text-[#728872]'>Total Blogs</p>
                </div>
                <div className=''>
                    <h1 className='text-[24px] font-[600] '>{data?.blogs}</h1>
                </div>
                </div>
              </div>
              <div className='mt-[40px] h-[4px] bg-[navy]'></div>
            </div>
            <div className={` bg-white shadow-sm p-[25px] lg:col-span-1 col-span-2 rounded-[15px] `}>
            <div className='flex flex-row gap-[15px]'>

           
              <div className='w-[50px] h-[50px] bg-green-600 flex flex-row justify-center items-center'>
              <GroupIcon style={{fontSize:"40px",color:"white"}}/>
              </div>
              <div className=''>
                <div className=''>
                    <p className='text-[14px] font-[400] text-[#728872]'>Total visitors</p>
                </div>
                <div className=''>
                    <h1 className='text-[24px] font-[600] '>34,945</h1>
                </div>
                </div>
              </div>
              <div className='mt-[40px] h-[4px] bg-[navy]'></div>
            </div>

         </div>




      </div>
    </div>
  )
}

export default Dashboard
