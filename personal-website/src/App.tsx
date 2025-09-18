import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { useEffect, useRef, useState } from "react";

import {
  createTheme,
  MantineProvider,
  Stack,
  type CSSVariablesResolver,
} from "@mantine/core";
import ColorSchemeToggle from "./components/ColorSchemeToggle";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Links from "./components/Links";

import { SECTIONS_DATA } from "./data/sections.data";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
});

const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    "--primary": "white",
    "--secondary": theme.colors.gray[1],
  },
  dark: {
    "--primary": "dark",
    "--secondary": theme.colors.dark[8],
  },
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

  const marginX = "30px";
  const marginY = "40px";

  return (
    <>
      <style>{"html { scroll-behavior: smooth; }"}</style>
      <MantineProvider
        defaultColorScheme="dark"
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
      >
        <ColorSchemeToggle
          pos="fixed"
          top={marginY}
          right={marginX}
          visibleFrom="sm"
        />
        <Navbar
          activeSection={activeSection}
          pos="fixed"
          top={marginY}
          left={marginX}
          visibleFrom="lg"
        />
        <Stack
          align="left"
          justify="center"
          gap="xl"
          w={{ base: "85%", md: "70%" }}
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
        <Links />
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
