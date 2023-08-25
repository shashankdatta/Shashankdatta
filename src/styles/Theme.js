import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: "var(--font-ntr)",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "extraLarge" },
          style: { fontSize: "22px", padding: "15px 30px" },
        },
      ],
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#00ADB5", // --primary
    },
    title: {
      main: "#FFFFFF", // --title
    },
    description: {
      main: "#e2e2e2", // --description
    },
    background: {
      main: "#1b2027", // --background
    },
    lightBg: {
      main: "#222831", // --light-bg
    },
    lightestBg: {
      main: "#2d3641", // --lightest-bg
    },
  },
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: "var(--font-ntr)",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "extraLarge" },
          style: { fontSize: "22px", padding: "15px 30px" },
        },
      ],
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#00ADB5", // --primary
    },
    title: {
      main: "#000000", // --title
    },
    description: {
      main: "#1b2027", // --description
    },
    background: {
      main: "#FFFFFF", // --background
    },
    lightBg: {
      main: "#f5f5f5", // --light-bg
    },
    lightestBg: {
      main: "#e0e0e0", // --lightest-bg
    },
  },
});
