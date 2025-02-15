import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return { ...state, isDark: !state.isDark };
        default:
            return state;
    }
};

const initialState = {
    isDark: false
};

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};