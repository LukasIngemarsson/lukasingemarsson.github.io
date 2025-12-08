import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { useEffect, useRef, useState } from "react";

import {
  Box,
  createTheme,
  MantineProvider,
  Stack,
  type CSSVariablesResolver,
} from "@mantine/core";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

import { SECTIONS_DATA } from "./data/sections.data";
import { useMediaQuery } from "@mantine/hooks";
import Header from "./components/Header";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "custom",
  colors: {
    custom: [
      "#edf0fd",
      "#d7dcf4",
      "#aab5ec",
      "#7b8ce5",
      "#5569df",
      "#3e53dc",
      "#3248db",
      "#263ac3",
      "#1f33ae",
      "#0f2174",
    ],
  },
  defaultRadius: "md",
  components: {
    BackgroundImage: {
      defaultProps: {
        radius: "md",
      },
    },
  },
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
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  const marginY = 30;
  const maxWidth = 950;
  const headerHeight = 38;

  return (
    <>
      <style>
        {`
          html { scroll-behavior: smooth; }         
          .mantine-List-itemWrapper {
            align-items: flex-start !important;
          }
          .mantine-Carousel-indicator {
            width: 12px;
            height: 4px;
            opacity: 0.4 !important;
            transition: width 250ms ease;
          }
          .mantine-Carousel-indicator[data-active="true"] {
            width: 40px;
            opacity: 0.8 !important;
          }
          [data-mantine-color-scheme="dark"] .mantine-Carousel-indicator {
            background-color: var(--mantine-color-gray-4) !important;
          }
          [data-mantine-color-scheme="dark"] .mantine-Carousel-indicator[data-active="true"] {
            background-color: var(--mantine-color-gray-0) !important;
          } 
          [data-mantine-color-scheme="light"] .mantine-Carousel-indicator {
            background-color: var(--mantine-color-dark-4) !important;
          }
          [data-mantine-color-scheme="light"] .mantine-Carousel-indicator[data-active="true"] {
            background-color: var(--mantine-color-dark-8) !important;
          } 
          .mantine-Carousel-control[data-inactive="true"] {
            opacity: 0;
            cursor: default;
          }
        `}
      </style>
      <MantineProvider
        defaultColorScheme={isMobile ? "dark" : "auto"}
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
      >
        <Box
          pos="fixed"
          top={0}
          left={0}
          right={0}
          h={marginY + headerHeight}
          bg="var(--mantine-color-body)"
          style={{ zIndex: 999 }}
          visibleFrom="lg"
        />
        <Header
          activeSection={activeSection}
          pos="fixed"
          top={marginY}
          left={0}
          right={0}
          h={headerHeight}
          mx="auto"
          maw={maxWidth}
          style={{ zIndex: 1000 }}
          visibleFrom="md"
        />
        <Stack
          align="left"
          justify="center"
          gap="xl"
          maw={maxWidth}
          w="100%"
          mt={headerHeight + 2 * marginY}
          mx="auto"
          px={isMobile ? "xl" : 0}
        >
          <Banner />
          {SECTIONS_DATA.map(({ id, Component }) => (
            <div key={id} id={id} ref={sectionRefs[id]}>
              <Component />
            </div>
          ))}
        </Stack>
        <Contact />
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
