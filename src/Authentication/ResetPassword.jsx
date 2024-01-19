import React from 'react'
import { Showloading, setShowPassword } from '../redux/rootSlice';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Loader from '../Components/Loader';
import axios from 'axios';
import { config } from '../config/Config';
import { toast } from 'react-toastify';

function ResetPassword() {

  const params = useParams();
  const navigate = useNavigate();
  const { showPassword ,loading } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
      },
      validate : (values) =>{
        const errors = {};

        if (!values.password) {
          errors.password = "Password is required";
        }
  
        if (!values.confirmPassword) {
          errors.confirmPassword = "Confirm Password is required";
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Passwords do not match";
        }
  
        return errors;
      },onSubmit : async (values) =>{
        console.log(values)
        try {
          dispatch(Showloading(true));
          const response = await axios.post(`${config.userApi}//reset-password/${params.token}`,values);
          navigate("/");
          toast.success("Your password has been changed");
          formik.resetForm();
        } catch (error) {
          formik.setErrors({
            general : error
          })
        }finally{
          dispatch(Showloading(false))
        }
      }
  })
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary kvnkjabvav">
    <div className="bg-white p-8 shadow-md rounded-md  w-[415px]">
      <h2 className="text-2xl flex justify-center font-semibold mb-4">
        Reset Password
      </h2>
      <div className=" text-red-700 text-sm ">
            <p className="text-center my-2">
              Here you can change your password
            </p>
           
          </div>
      {/* Your login form components go here */}

      <form action="" onSubmit={formik.handleSubmit}>
        {formik.errors.general && (
          <section className="text-red-800 alert" role="alert">
            {formik.errors.general.message}
          </section>
        )}
       
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Password:
          </label>
          <input
            type={showPassword ? "text " : "password"}
            id="password"
            name="password"
            placeholder="Ac1$"
            className={`w-full border border-gray-300 rounded-md p-2
            form-control form-contol-user ${
              formik.touched.password && formik.errors.password
                ? "is-valid"
                : ""
            }
            `}
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            // Add other input attributes and event handlers as needed
          />
        </div>
        <div>
            <div className="showPass">
              {showPassword ? (
                <EyeSlashFill
                  className="showPassIcon"
                  onClick={() => {
                    dispatch(setShowPassword(!showPassword));
                  }}
                />
              ) : (
                <EyeFill
                  className="showPassIcon"
                  onClick={() => {
                    dispatch(setShowPassword(!showPassword));
                  }}
                />
              )}
            </div>
          </div>
        {formik.errors.password ? (
          <span className=" mx-5 pb-3  text-red-600 text-danger text-sm">
            {formik.errors.password}
          </span>
        ) : null}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Confirm Password:
          </label>
          <input
            type={showPassword ? "text " : "password"}
            id="password"
            name="confirmPassword"
            placeholder="Ac1$"
            className={`w-full border border-gray-300 rounded-md p-2
            form-control form-contol-user ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "is-valid"
                : ""
            }
            `}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            // Add other input attributes and event handlers as needed
          />
        </div>
        <div>
            <div className="showPass">
              {showPassword ? (
                <EyeSlashFill
                  className="showPassIcon"
                  onClick={() => {
                    dispatch(setShowPassword(!showPassword));
                  }}
                />
              ) : (
                <EyeFill
                  className="showPassIcon"
                  onClick={() => {
                    dispatch(setShowPassword(!showPassword));
                  }}
                />
              )}
            </div>
          </div>
        {formik.errors.confirmPassword ? (
          <span className=" mx-5 p-3  text-red-600 text-danger text-sm">
            {formik.errors.confirmPassword}
          </span>
        ) : null}
        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded-md hover:bg-blue-600"
        >
          {loading ? <Loader /> : "Rest password"}
        </button>
        {/* Forgot Password and Register buttons */}
        <div className="flex justify-between text-sm p-2 mt-3 ">
          <Link
            to={"/forget-Password"}
            className="text-primary p-3  hover:bg-primary hover:text-white hover:rounded"
          >
            Forgot Password?
          </Link>
          <Link to={"/register"} className="text-primary p-3 hover:bg-primary hover:text-white hover:rounded">
            Register
          </Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ResetPassword