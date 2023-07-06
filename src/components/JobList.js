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

const isHorizontal = false;

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
        id={styles[`vertical-tabpanel-${index}`]}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={componentType}>{children}</Typography>
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

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const DivRoot = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  height: 300,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.greenBright.main,
  },
}));
const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.lightestSlate.main,
  fontSize: "15px",
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

  const experienceItems = {
    Amazon: {
      jobTitle: "Software Development Engineer @",
      duration: "JUL 2022 - PRESENT",
      desc: [
        "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market.",
        "Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry.",
        "Build distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use.",
      ],
    },
    Wattpad: {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2020 - APR 2021",

      desc: [
        "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
        "Iteratively built web experiences for 80 million users across high-traffic pages.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      ],
    },
    "University of Toronto": {
      jobTitle: "Research Engineer @",
      duration: "MAY 2021 - SEPT 2021",
      desc: [
        "Developing and researching an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
        " Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik.",
      ],
    },
    // Centivizer: {
    //   jobTitle: "Research Developer @",
    //   duration: "SEPT 2019 - APR 2020",
    //   desc: [
    //     "Researched and developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
    //     "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
    //   ]
    // },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    "Orange Gate": {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
        "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
        "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB.",
      ],
    },
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
          <div className={styles["joblist-duration"]}>
            {experienceItems[key]["duration"]}
          </div>
          <ul className={styles["job-description"]}>
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </DivRoot>
  );
}
