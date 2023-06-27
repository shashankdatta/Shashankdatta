"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/Theme";

export default function Providers({ children }) {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
