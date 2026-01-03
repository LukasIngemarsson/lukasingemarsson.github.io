import Education from "../sections/Education";
import Experience from "../sections/Experience";
import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";

export const SECTIONS_DATA = [
  {
    id: "aboutme",
    title: "About Me",
    Component: AboutMe,
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
