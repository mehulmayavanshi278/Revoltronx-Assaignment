import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import apiService from "../../services/apiService";
import { toast } from "react-toastify";


const ProductModal = ({ product, isOpen, onClose , refreshCart }) => {
  const [isLoading , setIsLoading]= useState(false);
  const [isOpenModel , setIsOpenModel]  = useState(isOpen);
  console.log("elm is:" , product);
  const [quantity, setQuantity] = useState(product.quantity);
  const [productElm , setProductElm] = useState(product);
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const [zoomStyle, setZoomStyle] = useState({ transform: "scale(1)", left: "0px", top: "0px" });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Percentage X
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Percentage Y

    setZoomStyle({
      transform: "scale(2)",
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)", left: "0px", top: "0px" });
  };

  const handleSaveChanges = async(id)=>{
    console.log("productId:" , id);
    try{
     setIsLoading(true);
     const obj = {
      quantity:quantity
     }
     const data = await apiService.updateCart(id , obj)
     if(data.status===200){
      setIsLoading(false);
      toast.success("Cart Updated Successfully");
      await refreshCart();
     }
    }catch(err){
      console.log(err);
    }
  }

  console.log("model is " , isOpen , "now");
  useEffect(()=>{
    
  },[])
  return (
    <>
      {isOpenModel && (
        <div className="w-full h-full m-0 p-0 fixed shadow-lg  rounded-lg antialiased inset-0 dark:bg-gray-800 bg-gray-500 bg-opacity-70  flex items-center justify-center">
          {/* Modal Container */}
          <div className="relative z-50 bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute z-50 top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Product Image */}
            <div className="relative w-full  max-h-[350px] overflow-hidden rounded-lg group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
            <img
              src={productElm?.productId.images[0]}
              className="w-full  object-cover transition-transform duration-300"
              style={zoomStyle}
            />
            </div>


            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Product Title */}
              <h2 className="text-2xl font-bold text-gray-800">
                {productElm?.productId.name}
              </h2>

              {/* Total Price */}
              <p className="text-lg text-gray-700">
                Total Price:{" "}
                <span className="font-bold text-green-600">
                  ₹{(productElm?.productId.price * quantity).toFixed(2)}
                </span>
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Quantity:</span>
                <div className="flex items-center space-x-4">
                  {/* Decrease Button */}
                  <button
                    onClick={handleDecrement}
                    className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full flex items-center justify-center shadow-md transition-all duration-200"
                  >
                    -
                  </button>

                  {/* Quantity Display */}
                  <span className="text-lg font-medium px-4 py-2 bg-gray-100 border rounded-md shadow-inner">
                    {quantity}
                  </span>

                  {/* Increase Button */}
                  <button
                    onClick={handleIncrement}
                    className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full flex items-center justify-center shadow-md transition-all duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 bg-gray-100 flex justify-end space-x-4">
            <a
  href="#"
  title="Close"
  className=" me-2  inline-flex  items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium text-white   focus:outline-none focus:ring-4 bg-gray-300 hover:bg-gray-400"
  role="button"
  onClick={()=>{onClose();setIsOpenModel(false)}}
>
  Close
</a>
              <a
  href="#"
  title="Proceed to Checkout"
  className=" w-[] me-2  inline-flex  items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  role="button"
  onClick={()=>{handleSaveChanges(productElm?.productId._id)}}
>
  {isLoading && <CircularProgress size="20px"/> }
  Save Changes
</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;
