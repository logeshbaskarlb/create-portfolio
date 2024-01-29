import { useFormik } from "formik";
import React from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLoading, setShowPassword } from "../redux/rootSlice";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingPage from "../Loading/LoadingPage";
import { config } from "../config/Config";
function Registration() {
  const { showPassword, loading } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name is required.";
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
    onSubmit: async (values) => {
      try {
        dispatch(setLoading(true));
        const response = await axios.post(`${config.userApi}/register`, values);
        if (response.status === 201) {
          toast.success(response.data.message, {
            position: "top-center",
          });
        }
        navigate("/");
      } catch (error) {
        console.error("Error during registration:", error.message);
        toast.error(
          error.response
            ? error.response.data.message || "Server error"
            : "Network error. Please check your connection.",
          { position: "top-center" }
        );
      } finally {
        dispatch(setLoading(false));
      }
    },
  });
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-primary kvnkjabvav">
        <div className="max-w-sm w-full space-y-8 p-4 bg-white rounded shadow-sm">
          <h2 className="text-center text-2xl font-bold">Sign up</h2>
          <div className="flex flex-col">
            <p className="text-center text-black my-2">Create a new account</p>
          </div>

          <form className="user" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="family-name"
                className={`mt-1 p-2 w-full border ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className={`mt-1 p-2 w-full border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Email ✉️"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password:
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className={`mt-1 p-2 w-full border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Password 🔑"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              <div className="showPass mt-2">
                {showPassword ? (
                  <EyeSlashFill
                    className="showPassIcon cursor-pointer"
                    onClick={() => {
                      dispatch(setShowPassword(!showPassword));
                    }}
                  />
                ) : (
                  <EyeFill
                    className="showPassIcon cursor-pointer"
                    onClick={() => {
                      dispatch(setShowPassword(!showPassword));
                    }}
                  />
                )}
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-black rounded-sm"
              >
                {loading ? <LoadingPage /> : "Register Account"}
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <Link to={"/forget-password"} className="text-gray-600">
              Forgot Password?
            </Link>
          </div>
          <p className="flex justify-center mt-2 text-white">
            <Link to={"/"} className="text-gray-600">
              Already have an account? Login!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Registration;
