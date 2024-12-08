import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CropFreeIcon from "@mui/icons-material/CropFree";
import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import SettingsIcon from "@mui/icons-material/Settings";

import { toast } from "react-toastify";

function Navbar({isOpenSidebar,setIsOpenSidebar}) {

  const [isopenNotify, setIsOpenNotify] = useState(false);
  const [notifications, setNotifications] = useState();

  const [userData, setUserData] = useState();

  const handleNotificationsOpen = async (e) => {

  };

  const getAllNotification = async () => {

  };

  const getUserData = async () => {

  };



  useEffect(() => {
    //  if(socket){
    //   const  handleNotification = (Notification)=>{
    //     toast.success( Notification?.name + '  sent you  Message2');
    //   }
    //   socket.on('new notification' , handleNotification);
    //  }
  }, []);

  return (
    <>
      <div className={`sticky bg-white top-0 z-10  `}>
        <div className={`sticky top-0 z-10 shadow-sm  px-[25px] py-[20px]`}>
          <div
            className={`grid ${
              isOpenSidebar
                ? "xl:grid-cols-[550px,1fr] lg:grid-cols-1fr"
                : "grid-cols-[50px,550px,1fr] lg:grid-cols[50px,1fr]"
            }   gap-[15px] items-center`}
          >
            {!isOpenSidebar && (
              <div className="">
                <KeyboardTabIcon
                  style={{
                    fontSize: "30px",
                    color: "grey",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsOpenSidebar(true);
                  }}
                />
              </div>
            )}
            <div className="">
              <div className="relative flex flex-row items-center">
                <input
                  className={`w-full   px-[10px] py-[10px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  value=""
                  placeholder="search here..."
                />
                <div className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[auto,1fr] gap-[15px] items-center">
            <div className="w-[350px] px-[20px] flex flex-row justify-between">
              <div className="relative w-[35px] h-[35px] rounded-[50%] bg-[#efecec] cursor-pointer hover:bg-[#ddd3d3] hover:transition-all p-1">
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
               
                >
    
                    <LightModeIcon style={{ backgroundColor: "none", color: "black" }} />

                </div>
              </div>
              <div className="relative w-[35px] h-[35px] rounded-[50%] bg-[#efecec] cursor-pointer hover:bg-[#ddd3d3] hover:transition-all p-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <NotificationsNoneIcon style={{ backgroundColor: "none", color: "black" }} />
                </div>
              </div>
   

              <div className="relative w-[35px] h-[35px] rounded-[50%] bg-[#efecec] cursor-pointer hover:bg-[#ddd3d3] hover:transition-all p-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <ChatBubbleOutlineIcon style={{ backgroundColor: "none", color: "black" }} />
                </div>
              </div>
              <div className="relative w-[35px] h-[35px] rounded-[50%] bg-[#efecec] cursor-pointer hover:bg-[#ddd3d3] hover:transition-all p-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CropFreeIcon style={{ backgroundColor: "none", color: "black" }} />
                </div>
              </div>
              <div className="relative w-[35px] h-[35px] rounded-[50%] bg-[#efecec] cursor-pointer hover:bg-[#ddd3d3] hover:transition-all p-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <WidgetsIcon style={{ backgroundColor: "none", color: "black" }} />
                </div>
              </div>
            </div>
            <div className="w-[100%] grid grid-cols-[auto,auto] items-center">
              <div className="">
                <div className="flex flex-row gap-[7px] items-center">
                  <div className="w-[35px] h-[35px]">
                    <img
                      className="rounded-[50%] w-full h-full object-cover"
                      src="https://megaminds001.s3.ap-southeast-2.amazonaws.com/1718090467262-tempImg22222.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-0">
                    <p className=" text-[16px] font-[500]">{ " Mehul"  }</p>
                    <p className="text-[grey] font-[300] text-[14px]">Admin</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center border border-solid border-b-0 border-t-0 border-r-0 border-l-[1px] ">
                <div
                  className=""
                >
                  <SettingsIcon style={{ fontSize: "30px" }} />
                </div>
              </div>
            </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
