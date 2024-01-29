import { Form, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Showloading , HideLoading } from "../../redux/rootSlice"
import axios from "axios";
import { config } from "../../config/Config";
function AdminAbout() {

  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
   try {
    const tempSkills = values.skills.split(",")
    values.skills = tempSkills
    dispatch(Showloading())
    const response = await axios.post(
      `${config.userApi}/api/portfolio/update-about`,
    {
      ...values,
      _id : portfolioData.about._id,
    })
    dispatch(HideLoading())
    if(response.data.success){
      message.success("About updated successfully", {
        position: "top-center",
      })
    }else{
      message.error("Error", {
        position: "top-center",
      })
    }
   } catch (error) {
    dispatch(HideLoading())
    message.error(error.message)
   }
  };
  return (
    <div>
         <p className="flex  justify-end p-0">
          <span className="text-red-500 ">*Note :</span>
         Don't leave any field.
        </p>

        <div>
    
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={{...portfolioData.about,
      skills : portfolioData.about.skills.join(" , ")}}
    >
      <Form.Item name="lottieURL" label="URL">
        <input placeholder="URL" />
      </Form.Item>
     
      <Form.Item name="description1" label="Description1">
        <input placeholder="Description1" />
      </Form.Item>
      <Form.Item name="description2" label="Description2">
        <textarea placeholder="Description2" />
      </Form.Item>

      <Form.Item name="skills" label="Skills">
        <textarea placeholder="Skills" />
      </Form.Item>

      <div className="flex justify-end w-full" >
        <button className="px-10 py-2 bg-primary text-white " type="submit">Save</button>
      </div>
    </Form>
  </div>
    </div>
 
  );
}

export default AdminAbout;
