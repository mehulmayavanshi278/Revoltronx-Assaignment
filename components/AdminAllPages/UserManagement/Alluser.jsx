import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Pagination, Box } from "@mui/material";


const Alluser = ({users}) => {
  const [userData , setUserData] = useState(users);

  const [page, setPage] = useState(1);
  
  const handlePagination = (event, value) => {
    setPage(value);
  };

  const totalProducts = userData?.length;
  const productsPerPage = 10;
  const paginatedProducts = userData.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div className="bg-white p-4 py-6">
      <div className="flex px-[25px] flex-row justify-between">
        <div> 
          <h1 className="text-[26px] font-[600] ">All Users</h1>
        </div>
      </div>
      <div className={`px-[25px] py-[15px] mt-4 shadow-sm rounded-[15px]`}>
        <div className="">
          <div className="flex flex-row justify-between items-center">
            <div className="w-[400px] relative flex flex-row items-center">
              <input
                className="w-full px-[10px] py-[10px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px"
                type="text"
                placeholder="search here..."
              />
              <div className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2">
                <SearchIcon />
              </div>
            </div>
            <div>
              <Button variant="contained" color="primary">
                Add New User
              </Button>
            </div>
          </div>
        </div>

        <div className="h-[1px] my-[20px] bg-[#cfcaca]"></div>
        <div className="grid grid-cols-1">
          <div className="col-span-1 overflow-x-scroll">
            <table className="w-[1200px]">
              <thead>
                <tr>
                  <th className="text-start text-[14px] px-4">User</th>
                  <th className="text-start text-[14px] px-4">Phone</th>
                  <th className="text-start text-[14px] px-4">Email</th>
                  <th className="text-start text-[14px] px-4">Role</th>
                  <th className="text-start text-[14px] px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProducts.map((elm, id) => (
                  <tr
                    key={id}
                    className="hover:bg-[#f1f1f4] transition-all duration-100 cursor-pointer"
                  >
                    <td className="py-2 px-4">
                      <div className="flex flex-row justify-start items-center gap-[10px]">
                        {/* <div className="w-[60px] rounded-[50%] relative h-[60px]">
                          <div className="w-[40px] rounded-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px]">
                            <img
                              className="w-full h-full object-cover"
                              src={`${elm.profileImg}`}
                              alt=""
                            />
                          </div>
                        </div> */}
                        <div className="mt-0 flex flex-col justify-center">
                          <p className="text-[14px] font-[500]">{`${elm.firstName} ${elm.lastName}`}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex flex-col justify-center">
                        <p className="text-[14px] font-[400] text-[#5d5959]">
                          {elm.phoneNo}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex flex-col justify-center">
                        <p className="text-[14px] font-[400] text-[#5d5959]">
                          {elm.email}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex flex-col justify-center">
                        <p className="text-[14px] font-[400] text-[#5d5959]">
                          {elm.role}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex flex-row justify-start gap-3">
                        <RemoveRedEyeIcon style={{ color: "blue" }} />
                        <EditIcon style={{ color: "orange" }} />
                        <DeleteForeverIcon style={{ color: "red" }} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-2">
          <Box sx={{ width: "400px", margin: "0 auto", textAlign: "center" }}>
            <Pagination
              count={Math.ceil(totalProducts / 10)}
              page={page}
              onChange={handlePagination}
              color="primary"
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
