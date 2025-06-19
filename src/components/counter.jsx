import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="bg-gray-800 text-white p-8 rounded shadow-lg flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Prop Drilling Counter</h1>
      <p className="text-2xl mb-6">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          + Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          - Decrement
        </button>
      </div>
    </div>
  );
}
