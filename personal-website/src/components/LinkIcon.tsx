import { ActionIcon, Tooltip } from "@mantine/core";
import type React from "react";

type Props = {
  tooltipLabel: string;
  href: string;
  children: React.ReactNode;
};

function LinkIcon({ tooltipLabel, href, children }: Props) {
  return (
    <Tooltip label={tooltipLabel}>
      <ActionIcon
        component="a"
        href={href}
        target="_blank"
        size="xl"
        variant="outline"
      >
        {children}
      </ActionIcon>
    </Tooltip>
  );
}

export default LinkIcon;
