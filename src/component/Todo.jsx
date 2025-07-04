"USE client";
import React from "react";
import TodoItem from "./TodoItems";
import todo_icon from "../assets/todo_icon.png";
import { useRef, useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const inputref = useRef();
  const addTask = () => {
    const inputtext = inputref.current.value.trim();

    if (inputtext === "") {
      alert("Please enter a task");
      return;
    }

    const Task = {
      id: Date.now(),
      text: inputtext,
      completed: false,
    };
    setTasks((prev) => [...prev, Task]);
    inputref.current.value = "";
  };
  const deleteTask = (id) => {
    setTasks((prev)=>{
     return prev.filter((item)=> item.id!== id)


    })
  };


  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        {/* Header */}
        <div className="flex items-center mt-5 gap-2">
          <img className="w-8 h-8" src={todo_icon} alt="Todo Icon" />
          <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
        </div>

        {/* Input Section */}
        <div className="flex items-center my-7 bg-gray-200 rounded-full p-2">
          <input
            ref={inputref}
            className="bg-transparent outline-none border-0 flex-1 h-14 pl-2 text-gray-800 placeholder:text-slate-600"
            type="text"
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="rounded-full bg-orange-600 text-white w-16 h-10 text-lg font-xs hover:scale-90 transition-transform duration-200"
          >
            Add +
          </button>
        </div>

        {/* Task List */}
        <div className="flex flex-col gap-2">
          {tasks.map((item, index) => (
            <TodoItem key={index} task={item.text} completed={item.completed} id={item.id} deleteTask={deleteTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
