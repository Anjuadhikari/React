import React from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItem from "./TodoItems";

const Todo = () => {
  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        
        {/* Header */}
        <div className="flex items-center mt-5 gap-2">
          <img className="w-8 h-8" src={todo_icon} alt="TodoIcon" />
          <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
        </div>

        {/* Input */}
        <div className="flex items-center my-7 bg-gray-200 rounded-full p-2">
          <input
            className="bg-transparent outline-none border-0 flex-1 h-14 pl-2 text-gray-800 placeholder:text-slate-600"
            type="text"
            placeholder="Add a new task"
          />
          <button className="rounded-full bg-orange-600 text-white w-32 h-14 text-lg font-medium hover:scale-90 transition-transform duration-200">
            Add +
          </button>
        </div>

        {/* Todo Items */}
        <div className="flex flex-col gap-2">
          <TodoItem/>
        
        </div>

      </div>
    </div>
  );
};

export default Todo;
