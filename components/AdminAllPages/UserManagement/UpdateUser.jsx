import React from "react";
import { Button } from "@mui/material";

function UpdateUser({  }) {
  const placeholderData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNo: "1234567890",
  };

  return (
    <div className="xl:w-[1000px] px-[25px] bg-white w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <form className="mt-3">
        <div
          className={`xl:grid grid-cols-[auto,1fr]  rounded-[15px] shadow-sm p-[20px] gap-x-[80px]`}
        >
          {/* Left Section */}
          <div>
            <div>
              <p className="text-[28px] font-sans font-[550]">Account</p>
              <p className="mt-2 font-sans font-[400]">
                Fill in the information below to add a new account
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="xl:grid grid-cols-2 gap-[10px]">
              {/* First Name */}
              <div>
                <p className="text-[15px] font-[700] font-sans">First Name*</p>
                <input
                  className={`mt-2 w-full px-[6px]  py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  name="firstName"
                  value={placeholderData.firstName}
                  placeholder="Enter First Name"
                  readOnly
                />
              </div>

              {/* Last Name */}
              <div>
                <p className="text-[15px] font-[700] font-sans">Last Name*</p>
                <input
                  className={`mt-2 w-full px-[6px]  py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                  type="text"
                  name="lastName"
                  value={placeholderData.lastName}
                  placeholder="Enter Last Name"
                  readOnly
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-3">
              <p className="text-[15px] font-[700] font-sans">Email*</p>
              <input
                className={`  mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                type="email"
                name="email"
                value={placeholderData.email}
                placeholder="Enter Email"
                readOnly
              />
            </div>

            {/* Phone Number */}
            <div className="mt-3">
              <p className="text-[15px] font-[700] font-sans">Phone No*</p>
              <input
                className={`  mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border border-1px`}
                type="text"
                name="phoneNo"
                value={placeholderData.phoneNo}
                placeholder="Enter Phone Number"
                readOnly
              />
            </div>

            {/* Save Button */}
            <div className="mt-5">
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
