import { createContext, useContext, useEffect, useState } from "react";
import * as Constants from "../../lib/constants";

type ThemeOptions = "dark" | "light" | "system";

interface IThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: ThemeOptions;
    storageKey?: string;
}

interface IThemeProviderState {
    theme: ThemeOptions;
    setTheme: (theme: ThemeOptions) => void;
}

const initialState: IThemeProviderState = {
    theme: Constants.SYSTEM_THEME,
    setTheme: () => null,
};

const ThemeProviderContext = createContext<IThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = Constants.DEFAULT_UI_THEME,
    storageKey = Constants.DEFAULT_UI_THEME_NAME,
    ...props
}: IThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeOptions>(
        () =>
            (localStorage.getItem(storageKey) as ThemeOptions) || defaultTheme,
    );

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(Constants.LIGHT_THEME, Constants.DARK_THEME);

        if (theme === Constants.SYSTEM_THEME) {
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches
                ? Constants.DARK_THEME
                : Constants.LIGHT_THEME;

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme: ThemeOptions) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
