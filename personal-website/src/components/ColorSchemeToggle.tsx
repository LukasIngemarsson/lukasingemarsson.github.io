import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
  type ActionIconProps,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

function ColorSchemeToggle(actionIconProps: ActionIconProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark");

  return (
    <ActionIcon
      variant="transparent"
      c="white"
      aria-label="Toggle color scheme"
      onClick={() =>
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark")
      }
      {...actionIconProps}
    >
      {computedColorScheme === "dark" ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
}

export default ColorSchemeToggle;
