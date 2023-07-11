"use client";

import { ThemeProvider } from "@mui/material/styles";
import { useState, useMemo, createContext } from "react";
import { lightTheme, darkTheme } from "@/styles/Theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function Providers({ children }) {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> {children} </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
