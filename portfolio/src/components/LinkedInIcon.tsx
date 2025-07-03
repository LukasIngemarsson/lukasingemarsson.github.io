import { type ActionIconProps } from "@mantine/core";
import { IconBrandLinkedin, type IconProps } from "@tabler/icons-react";
import SocialIcon from "./SocialIcon";

type Props = ActionIconProps & { iconProps?: IconProps };

function LinkedInIcon({ iconProps, ...actionIconProps }: Props) {
  const { size = 20, stroke = 1.5, ...restIconProps } = iconProps || {};

  return (
    <SocialIcon
      href="https://www.linkedin.com/in/lukas-ingemarsson/"
      {...actionIconProps}
    >
      <IconBrandLinkedin size={size} stroke={stroke} {...restIconProps} />
    </SocialIcon>
  );
}

export default LinkedInIcon;
