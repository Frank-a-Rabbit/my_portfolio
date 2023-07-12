import React, { createContext, useState } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: (updatedTheme: string) => void;
};

type ThemeProviderProps = {
    children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = (updatedTheme: string) => {
        setTheme(updatedTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };