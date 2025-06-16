import React from "react";
import elon from "./assets/elon.jpg";

export default function ProfileCard({ name, bio }) {
  return (
    <div>
      <div className=" mt-20 max-w-sm mx-auto bg-white border-2 border-gray-300 shadow-xl rounded-xl overflow-hidden p-6 hover:shadow-2xl transition duration-300">
        <img
          src={elon}
          alt={`${name}'s profile`}
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 object-cover"
        />
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="mt-2 text-gray-600 text-sm">{bio}</p>
        </div>
      </div>
    </div>
  );
}
