import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import { Showloading } from '../redux/rootSlice';
import axios from 'axios';
import { config } from '../config/Config';
import { toast } from 'react-toastify';

function ForgetPassword() {
  const { loading } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      },
    validate :(values ) =>{
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit :async (values) =>{
      console.log(values);
      try {
        dispatch(Showloading(true))
        const response = await axios.post(`${config.userApi}/forget-password`,values);
        if(response.status === 200){
          toast.success(response.data.message + "Kindly check the mail");
          navigate("/");
          formik.resetForm();
        }
      } catch (error) {
        const message = error.response.data.message;
        formik.setErrors({general : message})
      }
    }
  })
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-primary kvnkjabvav">
      <div className="bg-white p-8 shadow-md rounded-md w-[415px]">
        <h2 className="text-2xl flex justify-center font-semibold mb-4">
        Forgot password 
        </h2>
        <div className=" text-red-700 text-sm ">
            <p className="text-center my-2">
              Here you can reset your password
            </p>
           
          </div>
        {/* Your login form components go here */}
        <form action='' onSubmit={formik.handleSubmit}>
        {
            formik.errors.general && (<section className=" mx-7 pb-1 mb-3  text-red-600 text-danger text-sm"
            role="alert">
            {formik.errors.general}
            </section>
         )}
          <div className="mb-0">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="John@gmail.com"
              className="w-full border border-gray-300 rounded-md p-2"
              onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
              // Add other input attributes and event handlers as needed
            />
          </div>
          {formik.errors.email ? (
            <span className=" mx-7 pb-1 mb-3  text-red-600 text-danger text-sm">
              {formik.errors.email}
            </span>
          ) : null}
         
       
          <button
            type="submit"
            className="w-full mt-7 bg-primary text-white p-2 rounded-md hover:bg-blue-600"
          >
               { loading ? <Loader /> : "Reset Password"}
          </button>
          {/* Forgot Password and Register buttons */}
          <div className="flex justify-end text-sm p-2 mt-3 ">
           
            <Link
              to={"/"}
              className="text-primary p-3  hover:bg-primary hover:text-white hover:rounded"
            >
              Already have an account? Login!
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword