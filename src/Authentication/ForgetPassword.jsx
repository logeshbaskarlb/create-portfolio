import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoadingPage from '../Components/Loader';
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
    onSubmit: async (values) => {
      try {
        dispatch(Showloading(true));
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
      } catch (error) {
        const message = error.response.data.message;
        console.error("Error during registration:", message);
        formik.setErrors({ general: message }); // Use setErrors to display the error message
      } finally {
        dispatch(Showloading(false));
      }
    },
  });
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="col-md-6 p-4 border rounded shadow">
      <h2 className="mt-3 text-center"> Forgot password </h2>
     
      <div className="p-4 w-full h-full">
        <p className="text-center text-black my-0">
          Here you can reset your password
        </p>

      </div>
      <form action="" className="user" onSubmit={formik.handleSubmit}>
        {formik.errors.general && (
          <section className="alert alert-danger" role="alert">
            {formik.errors.general}
          </section>
        )}
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address :
        </label>
        <input
          type="email"
          name="email"
          className={`form-control form-control-user ${
            formik.touched.email && formik.errors.email ? "is-invalid" : ""
          }`}
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <span className="d-block ms-3 text-danger small invalid-feedback">
            {formik.errors.email}
          </span>
        )}
        <button
          className="btn btn-dark btn-user btn-block mx-5 mt-3 text-center"
          type="submit"
        >
          {loading ? <LoadingPage /> : "Reset Password"}
        </button>
      </form>
      <hr />
      <div className="d-flex justify-content-end">
        <Link to="/" className=" m-2 p-2 text-end text-dark text-decoration-none ">
          Back To Login
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword