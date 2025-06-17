import React from "react";
import daymode from "../assets/daymode.png";    // Make sure these paths are correct
import nightmode from "../assets/nightmode.png";
import { useTheme } from "./ThemeContext";      // Adjust the path if needed

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-8 right-8 cursor-pointer">
      <div onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={daymode} alt="Switch to night mode" className="w-8 h-auto" />
        ) : (
          <img src={nightmode} alt="Switch to day mode" className="w-8 h-auto" />
        )}
      </div>
    </div>
  );
}
