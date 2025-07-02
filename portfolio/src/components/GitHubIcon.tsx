import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { IconBrandGithub, type IconProps } from "@tabler/icons-react";

type Props = ActionIconProps & { iconProps?: IconProps };

function GitHubIcon({ iconProps, ...actionIconProps }: Props) {
  const { size = 20, stroke = 1.5, ...restIconProps } = iconProps || {};

  return (
    <ActionIcon
      size="lg"
      color="gray"
      variant="subtle"
      component="a"
      href="https://github.com/LukasIngemarsson/"
      target="_blank"
      {...actionIconProps}
    >
      <IconBrandGithub size={size} stroke={stroke} {...restIconProps} />
    </ActionIcon>
  );
}

export default GitHubIcon;
