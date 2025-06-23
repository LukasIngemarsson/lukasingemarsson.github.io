import "@mantine/core/styles.css";

import {
  createTheme,
  Group,
  MantineProvider,
  Stack,
  TableOfContents,
  Title,
  Image,
  Text,
} from "@mantine/core";

import portrait from "./assets/portrait.jpeg";

import { FooterSocial } from "./components/mantine-ui/FooterSocial";

import Education from "./sections/Education";
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
        style={{ "--pad": "40px", width: "100%", padding: "var(--pad)" }}
      >
        <TableOfContents
          style={{ width: 300, position: "sticky", top: "var(--pad)" }}
          depthOffset={15}
          getControlProps={({ data }) => ({
            onClick: () => data.getNode().scrollIntoView(),
            children: data.value,
          })}
        ></TableOfContents>
        <Stack align="left" justify="center" gap="xl">
          <Group align="center" gap="xl">
            <Image radius="50%" src={portrait} h={150} w="auto"></Image>
            <Stack gap={3}>
              <Title>Hello & Welcome to My Portfolio!</Title>
              <Text size="xl">Lukas Ingemarsson</Text>
              <Text>
                Final-Year M.Sc. Student in AI & ML @ Linköping University
              </Text>
            </Stack>
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
