import React, {createContext, useContext, useState, useEffect} from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return storedTheme === 'dark' || (!storedTheme && prefersDark);
    });

    useEffect(() => {
        document.body.classList.toggle('dark', isDark);
    }, [isDark]);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};