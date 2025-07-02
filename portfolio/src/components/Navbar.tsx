import { Anchor, Paper, Stack, type PaperProps } from "@mantine/core";

const items = [
  { section: "Who Am I?", href: "#whoami" },
  { section: "Education", href: "#education" },
  { section: "Experience", href: "#experience" },
  { section: "Projects", href: "#projects" },
];

function Navbar(props: PaperProps) {
  return (
    <Paper shadow="md" p="md" radius="md" bg="dark" {...props}>
      <Stack gap="xs">
        {items.map((item) => (
          <Anchor key={item.href} href={item.href} size="md" c="inherit">
            {item.section}
          </Anchor>
        ))}
      </Stack>
    </Paper>
  );
}

export default Navbar;
