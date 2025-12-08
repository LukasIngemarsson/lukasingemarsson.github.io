import { Anchor, Group, type GroupProps } from "@mantine/core";

import { SECTIONS_DATA } from "../data/sections.data";

type Props = GroupProps & { activeSection: string };

function Navbar({ activeSection, ...groupProps }: Props) {
  return (
    <Group
      px="xl"
      gap="xl"
      justify="space-between"
      align="center"
      {...groupProps}
    >
      {SECTIONS_DATA.map(({ id, title }) => {
        const isActive = activeSection === id;
        return (
          <Anchor
            key={id}
            href={"#" + id}
            size="md"
            c="white"
            td={isActive ? "underline" : ""}
            fw={isActive ? 550 : 400}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
          >
            {title}
          </Anchor>
        );
      })}
    </Group>
  );
}

export default Navbar;
