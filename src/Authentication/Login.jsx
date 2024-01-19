import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Showloading, setShowPassword } from "../redux/rootSlice";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import axios from "axios";
import { config } from "../config/Config";

function Login() {
  const { showPassword, loading } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email is requried";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid Email Address";
      }
      if (!values.password) {
        errors.password = "Password field cannot be empty";
      }
    },
    onSubmit: async (values) => {
        console.log(values);
        try {
          dispatch(Showloading(true));
          const response = await axios.post(`${config.userApi}/login`,values);
          if(response.status === 200){
            localStorage.setItem("token",response.data.token);
            navigate("/dashboard");
          }else{
            alert('Something went wrong');
          }

        } catch (error) {
          formik.setErrors({
            general : error.message
          })
        }finally{
          dispatch(Showloading(false))
        }
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary kvnkjabvav">
      <div className="bg-white p-8 shadow-md rounded-md  w-[415px]">
        <h2 className="text-2xl flex justify-center font-semibold mb-4">
          Login
        </h2>
        {/* Your login form components go here */}

        <form action="" onSubmit={formik.handleSubmit}>
          {formik.errors.general && (
            <section  className=" mx-7 pb-1 mb-3  text-red-600 text-danger text-sm" role="alert">
              {formik.errors.general.message}
            </section>
          )}
          <div className="mb-4">
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
              className={`w-full border border-gray-300 rounded-md p-2
              form-control form-control-user text-black ${
                formik.touched.email && formik.errors.email ? "is-valid" : ""
              }
              `}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // Add other input attributes and event handlers as needed
            />
            {formik.touched.email && formik.errors.email && (
              <span  className=" mx-7 pb-1 mb-3  text-red-600  text-sm">
                {formik.errors.email}
              </span>
            ) }
          </div>
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
            <span  className=" mx-7 pb-1 mb-3  text-red-600  text-sm">
              {formik.errors.password}
            </span>
          ) : null}
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md hover:bg-blue-600"
          >
            {loading ? <Loader /> : "Login"}
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
  );
}

export default Login;
