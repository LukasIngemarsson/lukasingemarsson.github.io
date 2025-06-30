import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import {
  createTheme,
  Group,
  MantineProvider,
  Stack,
  TableOfContents,
  Title,
  Image,
  Text,
  BackgroundImage,
  Paper,
} from "@mantine/core";

import portrait from "./assets/portrait.jpeg";
import banner from "./assets/banner.jpeg";

import { FooterSocial } from "./components/mantine-ui/FooterSocial";

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
      <Group
        align="flex-start"
        justify="space-between"
        gap="50px"
        wrap="nowrap"
        style={{
          "--padx": "200px",
          "--pady": "40px",
          width: "100%",
          paddingRight: "var(--padx)",
          paddingLeft: "var(--padx)",
          paddingTop: "var(--pady)",
          paddingBottom: "var(--pady)",
        }}
      >
        {/* <TableOfContents
          style={{ width: 300, position: "sticky", top: "var(--pady)" }}
          depthOffset={15}
          getControlProps={({ data }) => ({
            onClick: () => data.getNode().scrollIntoView(),
            children: data.value,
          })}
        ></TableOfContents> */}
        <Stack align="left" justify="center" gap="xl">
          <BackgroundImage src={banner} radius="md" p="lg">
            <Group align="center" gap="xl" p="md">
              <Image radius="50%" src={portrait} h={150} w="auto"></Image>
              <Paper radius="md" p="md">
                <Stack gap={3}>
                  <Title size="3.5rem">Hello, I'm Lukas!</Title>
                  <Text size="xl">
                    Final-Year M.Sc. Student in AI & ML @ Linköping University
                  </Text>
                </Stack>
              </Paper>
            </Group>
          </BackgroundImage>
          <WhoAmI />
          <Education />
          <Experience />
          <Projects />
        </Stack>
      </Group>
      <FooterSocial />
    </MantineProvider>
  );
}

export default App;
