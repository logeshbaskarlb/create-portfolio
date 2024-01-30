import { Form, Modal, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, Showloading } from "../../redux/rootSlice";
import axios from "axios";
import { config } from "../../config/Config";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    try {
      const tempTechnologies = values.technologies.split(",");
      values.technologies = tempTechnologies;
      dispatch(Showloading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(`${config.userApi}/api/portfolio/update-project`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      }else{
        response = await axios.post(
          `${config.userApi}/api/portfolio/add-project`,
          values
        );
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(Showloading());
      const response = await axios.post(
        `${config.userApi}/api/portfolio/delete-project`,
        {
          _id: item._id,
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error("Enter all the details");
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <p className="flex absolute justify-start">
        <span className="text-red-500 ">*Note :</span>
        Don't leave any field.
      </p>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => setShowAddEditModal(!showAddEditModal)}
        >
          Add Projects
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 md:grid-cols-1 md:w-full">
        {projects?.map((project, key) => (
          <div key={key} className="shadow border p-5 border-gray-400">
            <h1 className="text-primary text-xl font-bold">{project.title}</h1>
            <hr />
            <img src={project.image} alt="" className="h-60 w-80" />
            <h1>
              {" "}
              <span className="text-secondary">Title : </span> {project.title}
            </h1>
            <h1>
              {" "}
              <span className="text-secondary">Description :</span>{" "}
              {project.description}
            </h1>
            <h1>
              {" "}
              <span className="text-secondary">Technologies :</span>{" "}
              {project.technologies}
            </h1>
            <h1>
              {" "}
              <span className="text-secondary"> Link : </span>
              {project.link}
            </h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project " : "Add Project "}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies?.join(" , "),
              } || {}
            }
          >
            <Form.Item label="Title" name="title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item label="Image URL" name="image">
              <input placeholder="Image URL" />
            </Form.Item>
            <Form.Item label="Technologies" name="technologies">
              <input placeholder="Technologies" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <textarea placeholder="Description" />
            </Form.Item>
            <Form.Item label="Link" name="link">
              <input placeholder="Link" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModal(false);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminProjects;
