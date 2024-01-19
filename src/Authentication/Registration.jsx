import { useFormik } from "formik";
import React from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Showloading,setShowPassword } from "../redux/rootSlice";
import axios from "axios";
import { config } from "../config/Config"
import { toast } from "react-toastify";

function Registration() {
  const { showPassword, loading } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      firtName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.firtName) {
        errors.firtName = "FirstName is required.";
      }
      if (!values.lastName) {
        errors.lastName = "FirstName is required.";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit : async (values) =>{
      try {
        dispatch(Showloading(true));
        const response = await axios.post(`${config.userApi}/register`,values);
        if(response.status === 201){
          toast.success(response.data.message,{
            position:"top-center",
          });
        }
        navigate("/")
      } catch (error) {
        console.error(
          "Error during registration:",//response.data.message
        )
        toast.error("Error during registration. Please try again.", {
          position: "top-center",
        });
      }
    }
  });
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-primary kvnkjabvav">
        <div className="bg-white p-8 shadow-md rounded-md w-[415]">
          <h2 className="text-2xl flex justify-center font-semibold mb-4">
            Register
          </h2>
          {/* Your login form components go here */}
          <form>
            <div className="flex ">
              <div className="mb-4">
                <label
                  htmlFor="FirtName"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  <span className="hover:text-red-600">FirtName:</span>
                </label>
                <input
                  type="text"
                  id="firtName"
                  name="firtName"
                  placeholder="John "
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={formik.handleChange}
                  value={formik.values.firtName}
                  onBlur={formik.handleBlur}
                  // Add other input attributes and event handlers as needed
                />
              </div>
              {formik.errors.firtName ? (
                <span className="d-block mx-5 my-2 text-start text-danger small invalid-feedback">
                  {formik.errors.firtName}
                </span>
              ) : null}

              <div className="mb-4 ml-3">
                <label
                  htmlFor="LastName"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  <span className="hover:text-red-600">LastName:</span>{" "}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="John "
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  // Add other input attributes and event handlers as needed
                />
              </div>
            </div>
            {formik.errors.lastName ? (
              <span className="d-block mx-5 my-2 text-start text-danger small invalid-feedback">
                {formik.errors.lastName}
              </span>
            ) : null}
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
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                // Add other input attributes and event handlers as needed
              />
            </div>
            {formik.errors.email ? (
              <span className="d-block mx-5 my-2 text-start text-danger small invalid-feedback">
                {formik.errors.email}
              </span>
            ) : null}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ac1$"
                className="w-full border border-gray-300 rounded-md p-2"
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
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            {/* Forgot Password and Register buttons */}
            <div className="flex justify-between text-sm p-2 mt-3 ">
              <Link
                to={"/forget-Password"}
                className="text-primary p-3  hover:bg-primary hover:text-white hover:rounded"
              >
                Forgot Password?
              </Link>
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
  );
}

export default Registration;
