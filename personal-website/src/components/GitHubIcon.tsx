import { type ActionIconProps } from "@mantine/core";
import { IconBrandGithub, type IconProps } from "@tabler/icons-react";
import SocialIcon from "./SocialIcon";

type Props = ActionIconProps & { iconProps?: IconProps };

function GitHubIcon({ iconProps, ...actionIconProps }: Props) {
  const { size = 26, stroke = 1.5, ...restIconProps } = iconProps || {};

  return (
    <SocialIcon
      href="https://github.com/LukasIngemarsson/"
      {...actionIconProps}
    >
      <IconBrandGithub size={size} stroke={stroke} {...restIconProps} />
    </SocialIcon>
  );
}

export default GitHubIcon;
