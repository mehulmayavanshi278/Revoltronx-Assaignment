import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Pagination, Box } from "@mui/material";

function Productslist({ products }) {
  const [page, setPage] = useState(1);

  const handlePagination = (event, value) => {
    setPage(value);
  };
const [productsData , setProductsData] = useState(products);


  const totalProducts = productsData.length;
  const productsPerPage = 9;
  const paginatedProducts = productsData.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div>
      <div className="p-[25px] bg-white ">
        <div className="flex flex-row justify-between">
          <div className="">
            <h1 className="text-[26px] font-[600]">Product List</h1>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <p
              className="text-[13px] font-[400] hover:underline cursor-pointer"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home
            </p>
            <ArrowForwardIosIcon style={{ fontSize: "13px" }} />
            <p className="text-[13px] font-[400] hover:underline cursor-pointer">
              Products
            </p>
          </div>
        </div>

        <div className={`p-[25px] px-0 mt-4  shadow-sm rounded-[15px]`}>
          <div className="">
            <div className="flex flex-row justify-between items-center">
              <div className="w-[400px] relative flex flex-row items-center">
                <input
                  className={` w-full px-[10px] py-[10px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  placeholder="search here..."
                />
                <div className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2">
                  <SearchIcon />
                </div>
              </div>
              <div className="">
                <Button variant="contained" color="primary">
                  Add Product
                </Button>
              </div>
            </div>
          </div>

          <div className="h-[1px] my-[20px] bg-[#cfcaca]"></div>
          <div className="grid grid-cols-1 ">
            <div className="col-span-1 overflow-x-scroll">
              <table className="w-[1500px] overflow-x-scroll">
                <thead>
                  <tr>
                    <th className="text-start text-[14px] px-4">Product</th>
                    <th className="text-start text-[14px] px-4">Product Id</th>
                    <th className="text-start text-[14px] px-4">name</th>
                    <th className="text-start text-[14px] px-4">Price</th>
                    <th className="text-start text-[14px] px-4">stock</th>
                    <th className="text-start text-[14px] px-4">Created Date</th>
                    <th className="text-start text-[14px] px-4">Status</th>
                    <th className="text-start text-[14px] px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedProducts.map((product) => (
                    <tr key={product._id} className="hover:bg-[#f1f1f4] cursor-pointer">
                      <td className="py-2 px-4">
                        <div className="flex flex-row justify-start items-center gap-[10px]">
                          <div
                            className={`w-[60px] relative h-[60px]  rounded-[4px]`}
                          >
                            <div className="w-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px]">
                              <img
                                className="w-full h-full object-cover"
                                src={product?.images[0]}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="mt-0 flex flex-col justify-center">
                            <p className="text-[14px] font-[500]">{product.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4">{product._id}</td>
                      <td className="py-2 px-4">{product.name}</td>
                      <td className="py-2 px-4">{product.price}</td>
                      <td className="py-2 px-4">{product.stock}</td>
                      <td className="py-2 px-4">
                        {(() => {
                          const date = new Date(product.createdAt); // Ensure createdAt is converted to a Date object
                          const day = String(date.getDate()).padStart(2, "0");
                          const month = String(date.getMonth() + 1).padStart(
                            2,
                            "0"
                          ); // Months are 0-indexed
                          const year = String(date.getFullYear()); // Get last two digits of the year
                          return `${day}/${month}/${year}`;
                        })()}
                      </td>
                      <td className="py-2 px-4">{product.name}</td>
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
                count={Math.ceil(totalProducts / productsPerPage)}
                page={page}
                onChange={handlePagination}
                color="primary"
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productslist;
