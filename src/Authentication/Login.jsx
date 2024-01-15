import "./Login.css";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login({ toggleForm }) {
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
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Field required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("Submitted!");
    },
  });

  return (
    <>
       <section>
       <div className="user signinBx">
      <div className="imgBx">
        <img
          src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
          alt=""
        />
      </div>
      <div className="formBx">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h2>Sign In</h2>
          <input type="text" name="" placeholder="Username" />
          <input type="password" name="" placeholder="Password" />
          <input type="submit" name="" value="Login" />
          <p className="signup">
            Don't have an account ?
            <button type="button" onClick={toggleForm}>
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
    </section>
    </>
  );
}

export default Login;
