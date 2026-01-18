import { Box, type BoxProps } from "@mantine/core";
import type { ReactNode } from "react";

type Props = BoxProps & {
  src: string;
  children: ReactNode;
  blur?: number;
  overlay?: string;
};

function BlurredBackground({
  src,
  children,
  style,
  blur = 8,
  overlay = "rgba(0,0,0,0.55)",
  ...boxProps
}: Props) {
  return (
    <Box
      pos="relative"
      style={{
        ...style,
        overflow: "hidden",
        borderRadius: "inherit",
      }}
      {...boxProps}
    >
      <Box
        pos="absolute"
        inset={-5}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: `blur(${blur}px)`,
        }}
      />
      <Box pos="absolute" top={0} left={0} right={0} bottom={0} bg={overlay} />
      <Box pos="relative">{children}</Box>
      <Box
        pos="absolute"
        inset={0}
        style={{
          borderRadius: "inherit",
          border: "1px solid var(--mantine-color-default-border)",
          pointerEvents: "none",
          zIndex: 2
        }}
      />
    </Box >
  );
}

export default BlurredBackground;
