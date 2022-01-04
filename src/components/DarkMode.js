import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={480}  />
  );
};

export default DarkMode;
