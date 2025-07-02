import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { createTheme, Group, MantineProvider, Stack } from "@mantine/core";

import { FooterSocial } from "./components/mantine-ui/FooterSocial";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

import Education from "./sections/Education";
import Experience from "./sections/Experience";
import WhoAmI from "./sections/WhoAmI";
import Projects from "./sections/Projects";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
});

function App() {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Navbar pos="fixed" top="40px" left="40px" />
      <Group
        align="flex-start"
        justify="space-between"
        gap="50px"
        wrap="nowrap"
        w="100%"
        px="200px"
        py="40px"
      >
        <Stack align="left" justify="center" gap="xl">
          <Banner />
          <div id="whoami">
            <WhoAmI />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </Stack>
      </Group>
      <FooterSocial />
    </MantineProvider>
  );
}

export default App;
