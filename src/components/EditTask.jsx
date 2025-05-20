import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/taskSlice";

function EditTask({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, title, description, status }));
    setIsEdit(false);
  };

  return (
    <>
      <div>
        {isEdit ? (
          <div className="absolute bg-white p-6 rounded-md shadow-lg z-10">
            <h2 className="text-xl font-semibold text-indigo-500 mb-2">
              Edit Task
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
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500"
              >
                <option value="value" disabled selected>
                  Select Status
                </option>
                <option value="To Do">To Do</option>
                <option value="In-progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="flex justify-center gap-4 mx-auto">
              <button
                onClick={handleEdit}
                className=" w-[50%] bg-blue-500 rounded-xl text-white px-3 py-2 hover:bg-blue-600 transition duration-200"
              >
                Save
              </button>
              <button
                onClick={() => setIsEdit(false)}
                className=" w-[50%] bg-red-500 rounded-xl text-white px-3 py-2 hover:bg-red-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={(e) => setIsEdit(true)}
            className="bg-blue-500 text-white rounded-md hover:bg-blue-600 px-2 py-1 w-fit"
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
}

export default EditTask;
