import "./App.css";
import { store } from "./features/store";
import { Provider } from "react-redux";
import TaskLists from "./components/TaskLists";
import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="min-x-screen bg-gray-100 p-4">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
            <h1 className="text-2xl font-bold text-center mb-4 text-indigo-400">
              Task Management Application
            </h1>
            <AddTask />
            <TaskLists />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
