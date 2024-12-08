import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import * as yup from "yup";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNo: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  role: yup.string().required("Role is required"),
});

function AddNewUser({ innerBodyColor }) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      toast.success("User Created Successfully");
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors?.inner?.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <div className="bg-white p-[25px]">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-[26px] font-[600]">Add New User</h1>
        </div>
        <div className="flex flex-row justify-center gap-2 items-center">
          <p
            className="text-[13px] font-[400] hover:underline cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Dashboard
          </p>
          <ArrowForwardIosIcon style={{ fontSize: "13px" }} />
          <p
            className="text-[13px] font-[400] hover:underline cursor-pointer"
            onClick={() => {
              window.location.href = "/Dashboard/usermanagement/all user";
            }}
          >
            User Management
          </p>
          <ArrowForwardIosIcon style={{ fontSize: "13px" }} />
          <p className="text-[13px] font-[400] hover:underline cursor-pointer">
            Add New User
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-3">
        <div
          className={`grid xl:grid-cols-[auto,1fr] ${innerBodyColor} xl:gap-y-0 gap-y-[80px] rounded-[15px] shadow-sm px-0 p-[20px] gap-x-[80px]`}
        >
          <div>
            <p className="text-[28px] font-sans font-[550]">Account</p>
            <p className="mt-2 font-sans font-[400]">
              Fill in the information below to add a new account
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-[10px]">
              <div>
                <p className="text-[15px] font-[700] font-sans">First Name*</p>
                <input
                  className={`mt-2 w-full px-[6px] ${innerBodyColor} py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border`}
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                />
                {errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div>
                <p className="text-[15px] font-[700] font-sans">Last Name*</p>
                <input
                  className={`mt-2 w-full px-[6px] ${innerBodyColor} py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border`}
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                />
                {errors.lastName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3">
              <p className="text-[15px] font-[700] font-sans">Email*</p>
              <input
                className={` ${innerBodyColor} mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border`}
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div className="mt-3">
              <p className="text-[15px] font-[700] font-sans">Phone No*</p>
              <input
                className={` ${innerBodyColor} mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border`}
                type="text"
                name="phoneNo"
                value={formValues.phoneNo}
                onChange={handleChange}
                placeholder="Enter Phone Number"
              />
              {errors.phoneNo && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.phoneNo}
                </div>
              )}
            </div>

            <div className="mt-3">
              <p className="text-[16px]  font-[500] font-sans">Role*</p>
              <FormControl fullWidth error={errors.role}>
                <Select
                  name="role"
                  value={formValues.role}
                  onChange={handleChange}
                  fullWidth
                >
                  {["User", "Admin"].map((elm, id) => (
                    <MenuItem key={id} value={elm}>
                      {elm}
                    </MenuItem>
                  ))}
                </Select>
                {errors.role && <FormHelperText>{errors.role}</FormHelperText>}
              </FormControl>
            </div>

            <div className="mt-3">
              <p className="text-[15px] font-[700] font-sans">Password*</p>
              <input
                className={`${innerBodyColor} mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border`}
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.password}
                </div>
              )}
            </div>

            <div className="mt-3">
              <p className="text-[15px] font-[700] font-sans">
                Confirm Password*
              </p>
              <input
                className={`${innerBodyColor} mt-2 w-full px-[6px] py-[11px] border-solid outline-none rounded-[10px] placeholder:px-[10px] border`}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            <div className="mt-5">
              <Button type="submit" variant="contained" color="primary">
                Create User
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewUser;
