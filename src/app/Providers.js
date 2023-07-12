"use client";

import { ThemeProvider } from "@mui/material/styles";
import { useState, useMemo, createContext, useEffect } from "react";
import { lightTheme, darkTheme } from "@/styles/Theme";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function Providers({ children }) {
  const sysMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  const [mode, setMode] = useState(sysMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    setMode(sysMode);
  }, [sysMode]);

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
