import {
  Button,
  Code,
  useComputedColorScheme,
  type ButtonProps,
} from "@mantine/core";
import { IconBrandGithub, type IconProps } from "@tabler/icons-react";

type Props = ButtonProps & { iconProps?: IconProps; repoName: string };

function GitHubRepoButton({ iconProps, repoName, ...buttonProps }: Props) {
  const computedColorScheme = useComputedColorScheme("dark");

  const {
    size: iconSize = 20,
    stroke = 1.5,
    ...restIconProps
  } = iconProps || {};

  return (
    <Button
      component="a"
      href={`https://github.com/LukasIngemarsson/${repoName}`}
      target="_blank"
      variant="light"
      rightSection={
        <IconBrandGithub size={iconSize} stroke={stroke} {...restIconProps} />
      }
      {...buttonProps}
    >
      <Code
        c={computedColorScheme === "dark" ? "gray" : "black"}
        fw={700}
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {"/" + repoName}
      </Code>
    </Button>
  );
}

export default GitHubRepoButton;
