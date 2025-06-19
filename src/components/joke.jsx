import React from "react";
import { useState, useEffect } from "react";

export default function Joke() {
  const [joke, setjoke] = useState({ setup: "", punchline: "" });

  const getJoke = async () => {
    try {
      

      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setjoke(data);
    } catch (err) {
      console.error("Error Fetching Joke:", err);
    }
  };
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-yellow-100 text-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">😂 Random Joke</h1>
        <p className="text-lg font-medium mb-2">{joke.setup}</p>
        <p className="text-xl font-semibold text-blue-600">{joke.punchline}</p>
        <button
          onClick={getJoke}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
}
