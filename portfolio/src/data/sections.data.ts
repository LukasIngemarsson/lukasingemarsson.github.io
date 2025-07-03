import Education from "../sections/Education";
import Experience from "../sections/Experience";
import WhoAmI from "../sections/WhoAmI";
import Projects from "../sections/Projects";

export const SECTIONS_DATA = [
  {
    id: "whoami",
    title: "Who Am I?",
    Component: WhoAmI,
  },
  {
    id: "education",
    title: "Education",
    Component: Education,
  },
  {
    id: "experience",
    title: "Experience",
    Component: Experience,
  },
  {
    id: "projects",
    title: "Projects",
    Component: Projects,
  },
];
