import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
    darkNavy: {
      main: "#020c1b", // --dark-navy
    },
    navy: {
      main: "#0a192f", // --navy
    },
    lightNavy: {
      main: "#112240", // --light-navy
    },
    lightestNavy: {
      main: "#233554", // --lightest-navy
    },
    navyShadow: {
      main: "rgba(2, 12, 27, 0.7)", // --navy-shadow
    },
    slate: {
      main: "#8892b0", // --slate
    },
    lightSlate: {
      main: "#a8b2d1", // --light-slate
    },
    lightestSlate: {
      main: "#ccd6f6", // --lightest-slate
    },
    white: {
      main: "#e6f1ff", // --white
    },
    greenBright: {
      main: "#64ffda", // --green-bright
    },
    greenTint: {
      main: "rgba(100, 255, 218, 0.1)", // --green-tint
    },
  },
});

export default theme;
