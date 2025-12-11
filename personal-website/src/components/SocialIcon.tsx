import { ActionIcon, type ActionIconProps } from "@mantine/core";

import type { ReactNode } from "react";

type Props = ActionIconProps & { href: string; children: ReactNode };

function SocialIcon({ href, children, ...actionIconProps }: Props) {
  const { variant = "light", ...restActionIconProps } = actionIconProps;

  return (
    <ActionIcon
      size="lg"
      color="gray"
      variant={variant}
      component="a"
      href={href}
      target="_blank"
      {...restActionIconProps}
    >
      {children}
    </ActionIcon>
  );
}

export default SocialIcon;
