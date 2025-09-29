'use client';

import { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState<boolean>(false);
    const toggleTheme = () => setIsDark(prev => !prev)

    return (
        <ThemeContext value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext>
    );
}

export function useThemeMode() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useThemeMode deve ser usado dentro de ThemeContextProvider");
    }
    return ctx;
}