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
  blur = 3,
  overlay = "rgba(0,0,0,0.5)",
  ...boxProps
}: Props) {
  return (
    <Box
      pos="relative"
      style={{
        ...style,
        overflow: "hidden",
        borderRadius: "var(--mantine-radius-sm)",
      }}
      {...boxProps}
    >
      <Box
        pos="absolute"
        top={-5}
        left={-5}
        right={-5}
        bottom={-5}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: `blur(${blur}px)`,
        }}
      />
      <Box pos="absolute" top={0} left={0} right={0} bottom={0} bg={overlay} />
      <Box pos="relative">{children}</Box>
    </Box>
  );
}

export default BlurredBackground;
