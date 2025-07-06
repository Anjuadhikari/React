import "./App.css";
import { ThemeProvider } from "./component/ThemeContext";
import ThemeSwitch from "./component/ThemeSwitch";
import Joke from "./components/joke";
import ProfileCard from "./profileCard";
import Counter from "./components/counter";
import Todo from "./component/Todo";
import Multipage from "./component/multipage";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavouritesProvider } from "./components/Favourites";
import { useState } from "react";

function App() {
  const [currentView, setCurrentView] = useState("movies");
  return (
    <>
    <FavouritesProvider>
      <div className="app-container">
        {/* Conditional Rendering based on current view */}
        {currentView === "movies" ? (
          <MovieList onViewFavourites={() => setCurrentView("favourites")} />
        ) : (
          <Favourites onBackToMovies={() => setCurrentView("movies")} />
        )}
      </div>
    </FavouritesProvider>

      {/* <Multipage /> */}

      {/* <Hooks /> */}
      {/* <Todo/> */}
      {/* <h1 className="text-center mt-10 color:black text:2xl">Jokes</h1>
        <Joke/> */}
      {/* <Counter /> */}
      {/* // <ThemeProvider>
    //   <ThemeSwitch />
    //   <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center gap-6 p-6 transition-colors">
    //     <h1 className="text-4xl font-bold">Dark Mode Theme</h1>
    //     <div className="mt-6 p-6 rounded-xl shadow-xl bg-gray-100 dark:bg-gray-800 w-full max-w-md">
    //       <h2 className="text-2xl font-semibold mb-2">Theme Aware Card</h2>
    //       <p>This card adapts on the current theme.</p>
    //     </div>

    //     Uncomment and use ProfileCard if needed

    //     <ProfileCard */}
      {/* //       name="Elon Musk"
    //       bio="CEO of Tesla and SpaceX. Innovator, entrepreneur, and visionary shaping the future of space and energy."
    //     />

    //   </div> */}
      {/* // </ThemeProvider> */}
    </>
  );
}

export default App;
