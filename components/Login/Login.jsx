import React, { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import TokenHelper from "../../Helpers/TokenHelper";
import apiService from "../../services/apiService";
import CircularProgress from '@mui/material/CircularProgress';



const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function Login() {


  const [isLoadingLogin , setIsLoadingLogin] = useState(false);


  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleLoginBtn = async () => {
    setIsLoadingLogin(true);
    try {
      await loginSchema.validate(loginData, { abortEarly: false });

      const res = await apiService.login(loginData);
      if (res.status === 200) {
        setIsLoadingLogin(false)
        TokenHelper.create('token', res.data.token);
        if(res.data.role.toLowerCase()==='user'){
          window.location.href = "/";
        }else if(res.data.role.toLowerCase()==="admin"){
          window.location.href='/admin/dashboard'
        }else{
           console.log("else");
        }
        
        setLoginData({
          email: '',
          password: ''
        });
      }
    } catch (err) {
      setIsLoadingLogin(false);
      if (err.name === "ValidationError") {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else if (err.response && err.response.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <div className="bg-[#ecf0f4] w-full h-[100vh] relative pt-[50px]">
        <div className="max-w-[500px] mx-auto bg-white rounded-[20px] p-[35px]">
          <div>
            <h1 className="text-[26px] font-[650] font-sans">Login to account</h1>
            <p className="text-[16px] font-[350] font-sans">Enter your email and password to login</p>
          </div>
          <div className="mt-[40px]">
            <div>
              <p className="text-[16px] font-[650] font-sans">Email Address*</p>
              <input
                className={`mt-2 w-full px-[20px] py-[11px] border-solid outline-none rounded-[10px] border ${errors.email ? 'border-red-500' : ''}`}
                type="text"
                name="email"
                value={loginData.email}
                onChange={handleLoginOnChange}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="mt-[20px]">
            <div>
              <p className="text-[16px] font-[650] font-sans">Password*</p>
              <input
                className={`mt-2 w-full px-[20px] py-[11px] border-solid outline-none rounded-[10px] border ${errors.password ? 'border-red-500' : ''}`}
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginOnChange}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="mt-[20px]">
            <label className="flex items-center space-x-2">
              <input className="w-5 h-5 p-[10px]" type="checkbox" />
              <span className="text-base">Keep me signed in</span>
            </label>
          </div>
          <div className="mt-[20px] hover:text-black group bg-[#6666eb] border border-[#6666eb]  transition-all duration-200 hover:bg-[white] py-[12px] flex flex-row justify-center space-x-2">
         { isLoadingLogin &&<CircularProgress size="25px"/>}
            <p
              className=" text-white group-hover:text-[#6666eb]  rounded-[10px] text-center text-[15px] font-[650]"
              onClick={handleLoginBtn}
            >
              Login
            </p>
          </div>
          <div className="mt-[20px]">
            <p className="text-[14px] text-[#89a589] text-center w-full">or continue with Google</p>
          </div>
          <div className="mt-[20px]">
            <p className="text-[16px] text-[black] text-center w-full">
              You don't have an account yet?{" "}
              <span className="text-[#6666eb] cursor-pointer" onClick={() => { window.location.href = '/signup'; }}>
                Register Now
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
