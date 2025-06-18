import "@mantine/core/styles.css";

import {
  createTheme,
  Group,
  MantineProvider,
  Stack,
  TableOfContents,
  Title,
  Image,
} from "@mantine/core";

import crazyFrog from "./assets/crazyFrog.png";

import Education from "./sections/Education";
import { FooterSocial } from "./components/FooterSocial";
import Experience from "./sections/Experience";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
});

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Group
        align="flex-start"
        justify="space-between"
        gap="50px"
        wrap="nowrap"
        style={{ "--pad": "35px", width: "100%", padding: "var(--pad)" }}
      >
        <TableOfContents
          depthOffset={30}
          style={{ position: "sticky", top: "var(--pad)" }}
          getControlProps={({ data }) => ({
            onClick: () => data.getNode().scrollIntoView(),
            children: data.value,
          })}
        ></TableOfContents>
        <Stack align="left" justify="center" gap="md">
          <Group align="center" gap="xl">
            <Title>Welcome!</Title>
            <Image radius="md" src={crazyFrog} h={75} w="auto"></Image>
          </Group>
          <Education />
          <Experience />
        </Stack>
      </Group>
      <FooterSocial />
    </MantineProvider>
  );
}

export default App;
