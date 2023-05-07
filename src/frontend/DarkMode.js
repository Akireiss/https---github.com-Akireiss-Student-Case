import React, { useState, useEffect } from 'react';

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(savedDarkMode === 'true');
  }, []);

  const handleToggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <div>
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? 'Disable' : 'Enable'} Dark Mode
      </button>
      <p>Current mode: {isDarkMode ? 'bg-black' : 'bg-white'}</p>
    </div>
  );
}
