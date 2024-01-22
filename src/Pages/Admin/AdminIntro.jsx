import { Form, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Showloading, HideLoading , SetPortfolioData  } from "../../redux/rootSlice";
import axios from "axios";
import { useFormik } from "formik";
import { config } from "../../config/Config";

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const formik = useFormik({
    initialValues: {
      welcomeText : "" ,
      firstName : "",
      lastName : "",
      caption : "",
      description : ""
    },
    validate : (values )=>{
      let errors = {};
      if (!values.welcomeText) {
        errors.welcomeText = "Required";
      }
      if(!values.firstName){
        errors.firstName="First Name is Required"
      }
      if(!values.lastName){
        errors.lastName= "Last Name is required"
      }
      if(!values.caption){
        errors.caption ="Caption should be at least 3 characters long"
      }
      if(!values.description){
        errors.description="Description should be more than 10 characters long"
      }
    },
    onSubmit : async (values) =>{
      try {
        dispatch(Showloading());
        const response = await axios.post(
          `${config.userApi}/api/portfolio/update-intro`, {
          ...values,
          _id: portfolioData.intro._id,
        });
        dispatch(HideLoading());
        if (response.data.success) {
          message.success(response.data.message);
        } else {
          message.error(response.data.message);
        }
      } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
      }
    }

  });

  useEffect(() => {
  const fetchPortfolioData = async () => {
    try {
      dispatch(Showloading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(HideLoading());

      if (response.data) {
        dispatch(SetPortfolioData(response.data));
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  fetchPortfolioData();
}, [dispatch]);



  const onFinish = async (values) => {
    try {
      dispatch(Showloading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
      });
      dispatch(HideLoading());
      
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <p className="flex  justify-end p-0">
        <span className="text-red-500 ">*Note :</span>
        Don't leave any field.
      </p>
      <Form onFinish={onFinish} 
      onSubmit={formik.handleChange}
      layout="vertical"
      initialValues={portfolioData?.intro}
      >
        <Form.Item name="welcomeText" label="WelcomeText">
          <input
            placeholder="WelcomeText"
            value={formik.values.welcomeText}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item name="firstName" label="Firt Name">
          <input
            name="firstName"
            placeholder="Firt Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input
          name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input
          name="caption"
            placeholder="Caption"
            value={formik.values.caption}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea
          name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit">
          Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
