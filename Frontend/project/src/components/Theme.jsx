import React, { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("dark");
  const toggleB = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.color = "white";
    } else {
      setTheme("light");
      document.body.style.color = "black";
    }
  };
  return (
    <div>
      <button onClick={() => toggleB}>Theme</button>
    </div>
  );
};

export default Theme;