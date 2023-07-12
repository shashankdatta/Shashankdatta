"use client";

import { useTheme } from "@mui/material/styles";
import { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "./Providers";

export default function ThemeSwitcherToggle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <div
      style={{
        fontFamily: "var(--font-ntr)",
        fontSize: "16px",
        fontWeight: "bold",
        color: "var(--green-bright)",
      }}
    >
      {theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.slice(1)}{" "}
      Mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="greenBright"
      >
        <div>
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </div>
      </IconButton>
    </div>
  );
}
