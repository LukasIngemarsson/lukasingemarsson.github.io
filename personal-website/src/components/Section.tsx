import { Stack, Title } from "@mantine/core";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

function Section({ title, children }: Props) {
  return (
    <Stack>
      <Title order={1}>{title}</Title>
      {children}
    </Stack>
  );
}

export default Section;
