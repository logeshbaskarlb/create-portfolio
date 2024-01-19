import { Form, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Showloading , HideLoading } from "../../redux/rootSlice"
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function AdminContact() {

  const location = useLocation();
  const { state } =location;
  const dispatch = useDispatch();
  const { portfolioData , selectedHome } = useSelector((state) => state.root);
  console.log(selectedHome);

  
  const onFinish = async (values) => {
   try {
    dispatch(Showloading())
    const response = await axios.post("/api/portfolio/update-contact",
    {
      ...values,
      _id : portfolioData.contact._id,
    })
    dispatch(HideLoading())
    if(response.data.success){
      message.success(response.data.message)
    }else{
      message.error(response.data.message)
    }
   } catch (error) {
    dispatch(HideLoading())
    message.error(error.message)
   }
  };

 

  return (
    <>
    <div>
     
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.contact}
      >
        <Form.Item name="name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input placeholder="Gender" />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <input placeholder="Age" />
        </Form.Item>
      
        <Form.Item name="email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
      
        <Form.Item name="phone" label="Phone">
          <input placeholder="Phone Number" />
        </Form.Item>
      
        <Form.Item name="address" label="Address">
          <input placeholder="Address" />
        </Form.Item>        
         
        <div className="absolute" >
          <Link className="px-10 py-2 bg-primary text-white" 
          to={"/pdf"}
          type="submit">
            Export to PDF
          </Link>
        </div>
      
      
        <div className="flex justify-end w-full" >
          <button className="px-10 py-2 bg-primary text-white " type="submit">Save</button>
        </div>
      </Form>
    </div>
    </>

  );
}

export default AdminContact;
