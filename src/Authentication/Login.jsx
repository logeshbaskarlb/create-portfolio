import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Showloading, setShowPassword } from "../redux/rootSlice";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../Loading/LoadingPage";
import { toast } from "react-toastify";
import { isAuthenticated, login } from "../Components/Protect/AuthService";

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
      try {
        dispatch(Showloading(true));
        await login(values);
        navigate("/dashboard");
        toast.success("You are login in successfully");
      } catch (error) {
        formik.setErrors({ general: error.message });
        toast.error("Username or password incorrect");
      } finally {
        dispatch(Showloading(false));
      }
    },
  });

  React.useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 kvnkjabvav">
      <div className="max-w-md w-full space-y-8 p-4 bg-white rounded shadow-md">
        <h2 className="mt-3 text-center text-2xl font-bold">Welcome</h2>
        <p className="text-center text-gray-600 my-2">Login to your account</p>
        <form className="user" onSubmit={formik.handleSubmit}>
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="current-password"
              className={`mt-1 p-2 w-full border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Password 🔑"
              value={formik.values.password}
              onChange={formik.handleChange}
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
              className="w-full px-4 py-2 text-white bg-black rounded-md"
            >
              {loading ? <LoadingPage /> : "Login"}
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <Link to={"/forgot-password"} className="text-gray-600">
            Forgot Password?
          </Link>
          <div className="mt-2 text-gray-600">
            <Link to={"/register"} className="text-black">
              Create an Account!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
