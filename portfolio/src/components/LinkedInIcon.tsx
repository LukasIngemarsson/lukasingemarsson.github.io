import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { IconBrandLinkedin, type IconProps } from "@tabler/icons-react";

type Props = ActionIconProps & { iconProps?: IconProps };

function LinkedInIcon({ iconProps, ...actionIconProps }: Props) {
  const { size = 20, stroke = 1.5, ...restIconProps } = iconProps || {};

  return (
    <ActionIcon
      size="lg"
      color="gray"
      variant="subtle"
      component="a"
      href="https://www.linkedin.com/in/lukas-ingemarsson/"
      target="_blank"
      {...actionIconProps}
    >
      <IconBrandLinkedin size={size} stroke={stroke} {...restIconProps} />
    </ActionIcon>
  );
}

export default LinkedInIcon;
