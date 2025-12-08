import { Paper, Group, type BoxProps } from "@mantine/core";

import Navbar from "./Navbar";
import ColorSchemeToggle from "./ColorSchemeToggle";
import banner from "../assets/banner.jpeg";
import BlurredBackground from "./BlurredBackground";

type Props = BoxProps & {
  activeSection: string;
};

function Header({ activeSection, h, ...containerProps }: Props) {
  return (
    <Paper style={{ overflow: "hidden" }} withBorder {...containerProps}>
      <BlurredBackground src={banner} h={h}>
        <Group gap="md" wrap="nowrap" pos="relative" h={h}>
          <Navbar
            activeSection={activeSection}
            style={{ flex: 1, height: "100%" }}
          />
          <ColorSchemeToggle h={h} w={h} />
        </Group>
      </BlurredBackground>
    </Paper>
  );
}

export default Header;
