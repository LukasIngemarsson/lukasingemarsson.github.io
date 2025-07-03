import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { useEffect, useRef, useState } from "react";

import { createTheme, MantineProvider, Stack } from "@mantine/core";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

import { SECTIONS_DATA } from "./data/sections.data";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
});

function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS_DATA[0].id);

  const sectionRefs = Object.fromEntries(
    SECTIONS_DATA.map(({ id }) => [id, useRef<HTMLDivElement>(null)])
  );

  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY + 150;

      let currSection = SECTIONS_DATA[0].id;
      for (const section of SECTIONS_DATA) {
        const elem = sectionRefs[section.id].current;
        if (elem && elem.offsetTop <= fromTop) {
          currSection = section.id;
        }
      }
      setActiveSection(currSection);
      if (window.location.hash !== "#" + currSection)
        history.replaceState(null, "", "#" + currSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marginY = "40px";

  return (
    <>
      <style>{"html { scroll-behavior: smooth; }"}</style>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Navbar
          activeSection={activeSection}
          pos="fixed"
          top={marginY}
          left="40px"
        />
        <Stack
          align="left"
          justify="center"
          gap="xl"
          w="70%"
          my={marginY}
          mx="auto"
        >
          <Banner />
          {SECTIONS_DATA.map(({ id, Component }) => (
            <div key={id} id={id} ref={sectionRefs[id]}>
              <Component />
            </div>
          ))}
        </Stack>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
