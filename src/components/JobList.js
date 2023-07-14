"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection";
import styles from "@/styles/Experience.module.css";
import experienceItems from "@/json/experienceData.json";

const isHorizontal =
  typeof window !== "undefined" ? window.innerWidth < 600 : false;

function TabPanel(props) {
  const { children, value, index, componentType = "p", ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={styles[`full-width-tabpanel-${index}`]}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={componentType}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={styles[`vertical-tabpanel`]}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography style={{ maxWidth: "40vw" }} component={componentType}>
              {children}
            </Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  componentType: PropTypes.elementType,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
}

const DivRoot = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.greenBright.main,
  },
  "& .MuiTabs-scrollButtons": {
    color: theme.palette.greenBright.main,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.lightestSlate.main,
  fontSize: "17px",
  fontFamily: "--font-ntr, ",
  "&.Mui-selected": {
    color: theme.palette.greenBright.main,
  },
  alignItems: "flex-start",
  alignContent: "flex-start",
  textAlign: "left",
}));

export default function JobList() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DivRoot>
      <StyledTabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <StyledTab
            key={key}
            label={isHorizontal ? `0${i}.` : key}
            {...a11yProps(i)}
          />
        ))}
      </StyledTabs>

      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel componentType="div" key={key} value={value} index={i}>
          <span className={styles["joblist-job-title"]}>
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className={styles["joblist-job-company"]}>{key}</span>
          <div className={styles["joblist-info"]}>
            <div>{experienceItems[key]["duration"]}</div>
            <div>{experienceItems[key]["location"]}</div>
          </div>
          <ul className={styles["job-description"]}>
            {experienceItems[key]["desc"].map((descItem, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li key={i}>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </DivRoot>
  );
}
