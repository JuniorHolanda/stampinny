'use client'

import { SHeader } from "./Header.styles";
import { useThemeMode } from "@/app/themeContext";

export default function Header() {

    const { isDark, toggleTheme } = useThemeMode()

    return (
        <SHeader>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li><button>serviços</button></li>
                    <li><button>layouts</button></li>
                    <li><button>orçamentos</button></li>
                </ul>
            </nav>
            <button onClick={toggleTheme}>
                {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
        </SHeader>
    );
}