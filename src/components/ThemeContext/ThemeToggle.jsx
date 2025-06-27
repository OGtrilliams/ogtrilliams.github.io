import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <label>
      <div className="toggle-wrapper">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
        />
        {isDark ? " ☀️ Light Mode" : "🌙 Dark Mode"}
      </div>
    </label>
  );
};

export default ThemeToggle;
