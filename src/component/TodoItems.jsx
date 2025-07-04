import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItem = ({text,id,isCompleted ,deleteTask}) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
      <div className="flex items-center gap-2">
        <img src={tick} alt="Tick Icon" className="w-5 h-5" />
        <p className="text-black">{task}</p>
      </div>

      <img onClick={() => deleteTask(id)}
        src={deleteIcon}
        alt="Delete Icon"
        className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
      />
    </div>
  );
};

export default TodoItem;
