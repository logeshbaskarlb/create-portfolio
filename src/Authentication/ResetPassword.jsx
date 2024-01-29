import React from "react";
import { setLoading, setShowPassword } from "../redux/rootSlice";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import LoadingPage from "../Loading/LoadingPage";
import axios from "axios";
import { config } from "../config/Config";
import { toast } from "react-toastify";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { showPassword, loading } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
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
    },
    onSubmit: async (values) => {
      // Submit logic
      try {
        dispatch(setLoading(true));
        const response = await axios.post(
          `${config.userApi}/reset-password/${token}`,
          values
        );
        console.log(response);
        navigate("/");
        toast.success("Your password was successfully changed");
      } catch (error) {
        console.error("Error during password reset:", error);
        formik.setErrors({ general: error });
      } finally {
        dispatch(setLoading(false));
      }
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary kvnkjabvav">
      <div className="max-w-sm w-full space-y-8 p-4 bg-white rounded shadow-sm">
        <h2 className="text-center text-2xl font-bold">Reset Password</h2>
        <div className="flex flex-col">
          <p className="text-center text-black my-2">Create a new password</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          {formik.errors.general && (
            <div className="alert alert-danger" role="alert">
              {formik.errors.general.message}
            </div>
          )}

          <div className="mb-3">
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

          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password:
            </label>
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              className={`mt-1 p-2 w-full border ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Confirm Password 🔑"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
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
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <div className="text-center m-3">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded-sm"
            >
              {loading ? <LoadingPage /> : "Submit"}
            </button>
          </div>
        </form>

        <p className="flex justify-center p-3 text-white">
          <Link to={"/"} className="text-decoration-none text-dark">
            Already have an account? Login!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
