'use client'

import StyledJsxRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/themes/light";
import { darkTheme } from "@/themes/dark";
import { ReactNode } from "react";
import { ThemeContextProvider, useThemeMode } from "./themeContext";


function ThemedContent({ children }: { children: ReactNode }) {
    const { isDark } = useThemeMode();
    return (
        <>
            <StyledJsxRegistry>
                <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                    {children}
                </ThemeProvider>
            </StyledJsxRegistry>
        </>
    )
}

export default function WrapperThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeContextProvider>
            <ThemedContent>{children}</ThemedContent>
        </ThemeContextProvider>
    );
}