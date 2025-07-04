import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItem = ({ task, deleteTask, toggleTask }) => {
  const { id, text, completed } = task;
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
      <div onClick={() => toggleTask(id)} className="flex items-center gap-2">
        <img
          src={completed ? tick : not_tick}
          alt="Tick Icon"
          className="w-5 h-5"
        />
        <p
          className={`  text-lg ${
            completed ? "line-through text-gray-500" : "text-gray-800"
          } ${completed ? "opacity-50" : "opacity-100"} 
        font-medium transition-all duration-200 
        hover:text-gray-800 hover:opacity-100
           ${completed ? "line-through" : ""}`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => deleteTask(id)}
        src={deleteIcon}
        alt="Delete Icon"
        className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
      />
    </div>
  );
};

export default TodoItem;
