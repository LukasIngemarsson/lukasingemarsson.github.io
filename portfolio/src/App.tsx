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

import Edcucation from "./components/Education";

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
        gap="xl"
        style={{ "--pad": "35px", width: "100%", padding: "var(--pad)" }}
      >
        <TableOfContents
          depthOffset={30}
          style={{ width: "250", position: "sticky", top: "var(--pad)" }}
        ></TableOfContents>
        <Stack align="center" justify="center" gap="md">
          <Group align="center" justify="space-between" gap="xl">
            <Title order={1} size={60}>
              Welcome!
            </Title>
            <Image radius="md" src={crazyFrog} h={75} w="auto"></Image>
          </Group>
          <Edcucation />
        </Stack>
      </Group>
    </MantineProvider>
  );
}

export default App;
