import { Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import React, { useState } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import apiService from '../../services/apiService';
import CircularProgress from '@mui/material/CircularProgress';




const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  // email: yup.string().email('Enter a valid email').required('Email is required'),
  // otp: yup.string().when('isVerified', {
  //   is: true,
  //   then: yup.string().required('OTP is required'),
  // }),
  phoneNo: yup.string().required('phoneNo is required'),
   password: yup
  .string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters"),
});

function Signup() {

  const [isLoadingSignup , setIsLoadingSignup] = useState(false);
  const [isLoadingOtp , setIsLoadingOtp] = useState(false);
  const [isLoadingVerify , setIsLoadingVerify] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    otp: '',
    password: '',
    phoneNo:'',
    keepSignedIn: false,
    isVerified: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const getOTPonEmail = async() => {
    setIsLoadingOtp(true);
    try{
      const res = await apiService.getOtp({email:formValues.email});
      if(res.status===200){
        setIsLoadingOtp(false);
        toast.success(`OTP sent to this ${formValues.email}Please enter the OTP.`);
        setFormValues((prev) => ({ ...prev, isVerified: true }));
      }
    }catch(err){
      setIsLoadingOtp(false)
      console.log(err);
      if (err.response && err.response.status === 400) {
        toast.error(err?.response?.data?.message);
        return;
     }
    }
   
  };

  const handleVerify = async()=>{
    setIsLoadingVerify(true);
    try{
      const res = await apiService.verifyOtp({email:formValues.email , otp:formValues.otp});
      if(res.status===200){
        setIsLoadingVerify(false)
        toast.success('email verified');
      }
    }catch(err){
      setIsLoadingVerify(false)
      console.log(err);
      if (err.response && err.response.status === 400) {
        console.log(err.response)
        toast.error(err?.response?.data?.message);
        return;
     }
    }
  }

  const handleSubmit = async (e) => {
    setIsLoadingSignup(true);
    e.preventDefault();
    try {
      console.log()
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      console.log(formValues);
      const res = await apiService.signup(formValues);
      if(res.status===200){
        setIsLoadingSignup(false);
        setFormValues({
          firstName: '',
          lastName: '',
          email: '',
          otp: '',
          password: '',
          keepSignedIn: false,
          isVerified: false,
        })
        toast.success('registered successfully');
        window.location.href='/login'

      }
    } catch (err) {
      setIsLoadingSignup(false)
      const formattedErrors = {};
      err?.inner?.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
      if (err.response && err.response.status === 400) {
        console.log(err.response)
        toast.error(err?.response?.data?.message);
        return;
     }
    }
  };

  return (
    <div className="bg-[#ecf0f4] w-full min-h-[100vh] relative py-[50px]">
      <div className="max-w-[500px] mx-auto bg-white rounded-[20px] p-[35px]">
        <h2 className="text-center text-black-200 text-3xl mb-4">
          Welcome to <a href="/" className="text-transparent bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text">Yoga Art</a>
        </h2>
        <p className="text-center text-gray-300 text-lg mb-4">Join Yoga Art</p>

        <form onSubmit={handleSubmit} className="mt-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
            <div>
              <p className="text-[16px] font-[650] font-sans">First Name*</p>
              <input
                className="mt-2 w-full px-[20px] py-[11px] border-solid outline-none rounded-[10px] border"
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              {errors.firstName && <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>}
            </div>
            <div>
              <p className="text-[16px] font-[650] font-sans">Last Name*</p>
              <input
                className="mt-2 w-full px-[20px] py-[11px] border-solid outline-none rounded-[10px] border"
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              {errors.lastName && <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>}
            </div>
          </div>

          <div className="mt-[20px]">
            <p className="text-[16px] font-[650] font-sans">Email Address*</p>
            <div className="flex flex-col md:flex-row items-center">
              <input
                className="mt-2 w-full px-[20px] py-[11px] border-solid outline-none rounded-[10px] border"
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
              <Button variant="outlined" color="primary" onClick={getOTPonEmail} sx={{ margin: 1 }} className="mt-2 md:mt-0 md:ms-2">
              {isLoadingOtp ? <CircularProgress size={25} /> : "Get OTP"}
              </Button>
            </div>
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>

          {formValues.isVerified && (
            <div className="mt-[20px]">
              <p className="text-[16px] font-[650] font-sans">OTP*</p>
              <div className="flex flex-col md:flex-row items-center">
              <input
                className="mt-2 w-full px-[20px] py-[11px] border-solid outline-none rounded-[10px] border"
                type="text"
                name="otp"
                value={formValues.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
              />
                            <Button variant="outlined" color="primary" onClick={handleVerify} sx={{ margin: 1 }} className="mt-2 md:mt-0 md:ms-2">
                            {isLoadingVerify ? <CircularProgress size={25} /> : "Verify"}                
              </Button>
              </div>
              {errors.otp && <div className="text-red-500 text-sm mt-1">{errors.otp}</div>}
            </div>
          )}



          <div className="mt-[20px]">
            <p className="text-[16px] font-[650] font-sans">Phone*</p>
            <input
              className="mt-2 w-full px-[20px] py-[11px] border-solid outline-none rounded-[10px] border"
              type="text"
              name="phoneNo"
              value={formValues.phoneNo}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.phoneNo && <div className="text-red-500 text-sm mt-1">{errors.phoneNo}</div>}
          </div>

          <div className="mt-[20px]">
            <p className="text-[16px] font-[650] font-sans">Password*</p>
            <input
              className="mt-2 w-full px-[20px] py-[11px] border-solid outline-none rounded-[10px] border"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
          </div>

          <div className="mt-[20px]">
            <label className="flex items-center space-x-2">
              <input
                className="w-5 h-5 p-[10px]"
                type="checkbox"
                name="keepSignedIn"
                checked={formValues.keepSignedIn}
                onChange={handleChange}
              />
              <span className="text-base">Keep me signed in</span>
            </label>
          </div>

          <div className="mt-[20px]">
            <Button type="submit" variant="contained" color="primary" disabled={!formValues.isVerified} onClick={(e)=>{handleSubmit(e)}}>
            { isLoadingSignup ? <CircularProgress size={25}/> : "Register"}
              
            </Button>
          </div>

          <div className="mt-[20px] text-center">
            <p className="text-[14px] text-[#89a589]">or continue with Google</p>
          </div>

          <div className="mt-[20px] text-center">
            <p className="text-[16px] text-black">
              Already have an account? <span className="text-[#6666eb] cursor-pointer" onClick={() => { window.location.href = '/login' }}>login</span>
            </p>
          </div>
        </form>
      </div>


    </div>
  );
}

export default Signup;
