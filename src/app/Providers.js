"use client";

import { useState, useMemo, createContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import GlobalStyles from "@mui/material/GlobalStyles";
import getGlobalStyles from "./globalCss";

import { lightTheme, darkTheme } from "@/styles/Theme";

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
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={getGlobalStyles(theme)} />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
