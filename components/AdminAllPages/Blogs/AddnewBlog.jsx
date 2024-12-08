import React, { useEffect, useState, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Select, MenuItem, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

import { toast } from "react-toastify";

export const categories = [
  "Antioxidants",
  "Ayurvedic",
  "Digestive Health",
  "General Health",
  "Herbal Speciality Supplements",
  "Men Health",
  "Organic",
  "Personal Care",
  "Sexual Health",
  "Vitamines And Minarels",
  "Women Health",
];

export const tags = ["mehul", "mehul", "mehul"];

function AddnewBlog({ innerBodyColor, bodyColor}) {

  const fileInputRef = useRef(null);
  const [newProductData, setNewProductData] = useState({
    name:"",
    productName: "",
    category: "",
    tags: "",
    description: "",
    price: "",
    dummyPrice: "",
    vendorName: "",
    vendorContact: "",
    weight: "",
    dimension: "",
    stock: "",
    status: "",
    images: [],
  });

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setNewProductData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files],
    }));
  };

  const handleImageRemove = (index) => {
    setNewProductData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async() => {
    // Handle form submission, e.g., send data to an API

    const formData = new FormData();

    formData.append("name", newProductData.name);
    formData.append("category", [newProductData.category]);
    formData.append("tags", newProductData.tags);
    formData.append("description", newProductData.description);
    formData.append("price", newProductData.price);
    formData.append("dummyPrice", newProductData.dummyPrice);


    formData.append("vendorName", newProductData?.vendorName);
    formData.append("vendorContact", newProductData?.vendorContact);


 
    formData.append("weight", newProductData?.weight);
    formData.append("dimension", newProductData?.dimension);

    formData.append("stock", newProductData.stock);
    formData.append("status", newProductData.status);

    newProductData.images.forEach((image, index) => {
      formData.append('images', image);
    });

    try{
     
     if(res.status===200){
      
      toast.success("Product Added")
     }
    }catch(err){
      console.log(err);
    }

    console.log(newProductData);
  };

  const [type, setType] = useState();
  const [tabType, setTabType] = useState();
  const [subTabType, setSubTabType] = useState();

  useEffect(() => {
    const path = window.location.pathname.split("/");
    setType(path[1]);
    setTabType(path[2]);
    path.length > 3 && setSubTabType(path[3].split("%20").join(" "));
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="flex flex-row justify-between px-[20px]">
          <div className="p-[20px] px-0">
            <h1 className="text-[26px] font-[600] ">{subTabType}</h1>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <p className="text-[13px] font-[400] hover:underline cursor-pointer" onClick={()=>{window.location.href='/'}}>
              {type}
            </p>
            <ArrowForwardIosIcon style={{ fontSize: "13px" }} />
            <p className="text-[13px] font-[400] hover:underline cursor-pointer" onClick={()=>{ window.location.href = '/Dashboard/Ecommerce/product list'}}>
              {tabType}
            </p>
            <ArrowForwardIosIcon style={{ fontSize: "13px" }} />
            <p className="text-[13px] font-[400] hover:underline cursor-pointer">
              {subTabType}
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-[1fr,1fr] grid-cols-1 gap-[15px] mt-[20px]">
          <div
            className={`"" shadow-sm rounded-[15px] p-[20px]`}
          >
            <div className="">
              <div className="">
                <p className="text-[16px] font-[500] font-sans">
                  Title*
                </p>
                <input
                  className={`"" mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  name="name"
                  value={newProductData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Product Name"
                />
              </div>
              <div className="mt-5">
              <div className="">
                <p className="text-[16px] font-[500] font-sans">Description *</p>
                <textarea
                  rows="3"
                  className={`"" mt-2 w-full px-[10px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  name="description"
                  value={newProductData.description}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </div>
            </div>
            </div>
            <div className="grid grid-cols-[1fr,1fr] gap-[15px] mt-5">
              <div className="">
                <p className="text-[16px] font-[500] font-sans">Category</p>
                <div className={`"" mt-2`}>
                  <Select
                    className={`""`}
                    sx={{ color: "#cbb9b9" }}
                    name="category"
                    value={newProductData.category}
                    onChange={handleInputChange}
                    fullWidth
                  >
                    {categories.map((elm, id) => (
                      <MenuItem key={id} value={elm}>
                        {elm}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="">
                <p className="text-[16px] font-[700]">Tags</p>
                <div className="mt-2">
                  <Select
                    labelId="tags-select-label"
                    sx={{ color: "#cbb9b9" }}
                    name="tags"
                    value={newProductData.tags}
                    onChange={handleInputChange}
                    fullWidth
                  >
                    {tags.map((elm, id) => (
                      <MenuItem key={id} value={elm}>
                        {elm}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            <div className="mt-5">
            <div className="">
                <p className="text-[16px] font-[500] font-sans">
                  Title 2*
                </p>
                <input
                  className={`"" mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  name="name"
                  value={newProductData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Product Name"
                />
              </div>
              <div className="">
                <p className="text-[16px] font-[500] font-sans">Description 2*</p>
                <textarea
                  rows="3"
                  className={`"" mt-2 w-full px-[10px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  name="description"
                  value={newProductData.description}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </div>

            </div>
          </div>
          <div
            className={`"" shadow-sm rounded-[15px] p-[20px]`}
          >
            <div className="">
            <div className="">
                <p className="text-[16px] font-[500] font-sans">
                  Title 3*
                </p>
                <input
                  className={`"" mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  name="name"
                  value={newProductData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Product Name"
                />
              </div>
              <div className="">
                <p className="text-[16px] font-[500] font-sans">Description 3*</p>
                <textarea
                  rows="3"
                  className={`"" mt-2 w-full px-[10px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  name="description"
                  value={newProductData.description}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </div>
              <div className="">
                <p className="text-[16px] font-[500] font-sans">
                  Upload Images*
                </p>
                <div className="grid grid-cols-6 gap-[15px] mt-3">
                  <div className=" relative border-dashed border-[blue] col-span-2 border-[2px] rounded-[5px] h-[250px]">
                    <div
                      className="flex w-full flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      onClick={handleDivClick}
                    >
                      <CloudUploadIcon
                        style={{ fontSize: "40px", color: "green" }}
                      />
                      <p className="text-center text-[14px] text-[blue] hover:underline cursor-pointer">
                        Upload <span>product images</span>
                      </p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        multiple
                      />
                    </div>
                  </div>
                  <div className="col-span-4  border-[1px] p-[15px]">
                    <div className="flex flex-wrap gap-[10px] justify-start">
                      {newProductData.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative w-[70px] h-[70px] p-1"
                        >
                          <img
                            className="w-full h-full object-cover rounded-md"
                            src={URL.createObjectURL(image)}
                            alt={`Product ${index}`}
                          />
                          <CloseIcon
                            className="absolute  rounded-[5px] shadow-md bg-[white] top-1 right-1 cursor-pointer"
                            onClick={() => handleImageRemove(index)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                      >
                        Add Blog
                      </Button>
                    </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddnewBlog;
