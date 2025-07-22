import { Anchor, Paper, Stack, type PaperProps } from "@mantine/core";
import { SECTIONS_DATA } from "../data/sections.data";

type Props = PaperProps & { activeSection: string };

function Navbar({ activeSection, ...paperProps }: Props) {
  return (
    <Paper shadow="md" p="md" radius="md" bg="black" w={130} {...paperProps}>
      <Stack gap="xs">
        {SECTIONS_DATA.map(({ id, title }) => {
          const isActive = activeSection === id;
          return (
            <Anchor
              key={id}
              href={"#" + id}
              size="md"
              c="inherit"
              td={isActive ? "underline" : ""}
              fw={isActive ? 700 : 400}
            >
              {title}
            </Anchor>
          );
        })}
      </Stack>
    </Paper>
  );
}

export default Navbar;
