import { Anchor, Group, type GroupProps } from "@mantine/core";

import { SECTIONS_DATA } from "../data/sections.data";

type Props = GroupProps & { activeSection: string; onSectionClick?: (id: string) => void; };

function Navbar({ activeSection, onSectionClick, ...groupProps }: Props) {
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
            onClick={e => {
              if (onSectionClick) {
                e.preventDefault();
                onSectionClick(id);
              }
            }}
          >
            {title}
          </Anchor>
        );
      })}
    </Group>
  );
}

export default Navbar;
