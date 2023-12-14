import { createContext,useContext} from "react";

export const ThemeContexts = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ThemeProvider = ThemeContexts.Provider;

export default function useTheme () {
    return useContext(ThemeContexts)
}