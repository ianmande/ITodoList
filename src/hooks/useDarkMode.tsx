import { useContext } from 'react';
import { DarkModeContext } from '../context/darkMode';

export const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return { isDarkMode, toggleDarkMode };
};
