// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchTodo } from "../features/taskSlice";
import EditTask from "./EditTask";
import { deleteTask } from "../features/taskSlice";

function TaskLists() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  // useEffect(() => {
  //   dispatch(fetchTodo());
  // }, [dispatch]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <div>
          <h2>Tasks</h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-gray-50 rounded-md p-4 shadow-sm flex justify-between items-start"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {task.title}
                  </h3>
                  {task.description && (
                    <p className="text-gray-600">{task.description}</p>
                  )}
                  <p className="mt-1 text-sm font-semibold">
                    Status:{" "}
                    <span className="italic underline">{task.status}</span>
                  </p>
                </div>

                <div className="flex gap-2 items-start shrink-0">
                  <EditTask task={task} />
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 text-white rounded-md hover:bg-red-600 px-2 py-1 w-fit"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TaskLists;
