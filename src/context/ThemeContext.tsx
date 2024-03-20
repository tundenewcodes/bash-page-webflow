import React, { createContext, useState } from "react";

interface ThemeContextValue {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface Props {
  children?: React.ReactNode;
}
const initialValue: ThemeContextValue = {
  isDarkMode: true,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextValue>(initialValue);

const ThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useTheme = () => React.useContext(ThemeContext);
