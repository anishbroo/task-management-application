import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../features/taskSlice";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuid4(),
      title,
      description,
      status,
    };

    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setStatus("");
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setStatus("");
  };

  return (
    <>
      <form className="mb-6" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold text-indigo-500 mb-2">
          Add New Task
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Task Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full mb-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <textarea
            className="w-full mb-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>

        <div className="mb-4">
          <select
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500"
          >
            <option value="value" selected>
              Select Status
            </option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex justify-center gap-4 mx-auto">
          <button className=" w-[50%] bg-indigo-500 rounded-xl text-white px-3 py-2 hover:bg-indigo-600 transition duration-200">
            Add Task
          </button>
          <button
            onClick={handleCancel}
            className=" w-[50%] bg-indigo-500 rounded-xl text-white px-3 py-2 hover:bg-indigo-600 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTask;
