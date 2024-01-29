import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "../Loading/LoadingPage";
import { HideLoading, setLoading } from "../redux/rootSlice";
import axios from "axios";
import { config } from "../config/Config";
import { toast } from "react-toastify";

function ForgetPassword() {
  const { loading } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
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
    onSubmit: async (values) => {
      try {
        dispatch(setLoading(true));
        const response = await axios.post(
          `${config.userApi}/forgot-password`,
          values
        );
        console.log(response);
        if (response.status === 200) {
          toast.success(response.data.message + "Kindly check your mail");
          navigate("/");
          formik.resetForm();
        }
        dispatch(HideLoading());
      } catch (error) {
        const message = error.response.data.message;
        console.error("Error during registration:", message);
        formik.setErrors({ general: message }); // Use setErrors to display the error message
      } finally {
        dispatch(setLoading(false));
      }
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="max-w-sm w-full space-y-8 p-4 bg-white rounded shadow-sm">
        <h2 className="text-center text-2xl font-bold">Forgot Password</h2>
        <div className="p-4">
          <p className="text-center text-black my-0">
            Here you can reset your password
          </p>
        </div>
        <form className="user" onSubmit={formik.handleSubmit}>
          {formik.errors.general && (
            <div className="alert alert-danger" role="alert">
              {formik.errors.general}
            </div>
          )}
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
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-black rounded-sm"
          >
            {loading ? <LoadingPage /> : "Reset Password"}
          </button>
        </form>
        <hr />
        <div className="flex justify-end">
          <Link
            to="/"
            className="m-2 p-2 text-end text-dark text-decoration-none"
          >
            Back To Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
