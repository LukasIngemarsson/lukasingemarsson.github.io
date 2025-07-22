import { Timeline, Stack, Title, Text } from "@mantine/core";
import type { ReactNode } from "react";

type Props = {
  key: number;
  role: string;
  organisation: string;
  date: string;
  children: ReactNode;
};

function ExperienceTimelineItem({
  key,
  role,
  organisation,
  date,
  children,
}: Props) {
  return (
    <Timeline.Item
      key={key}
      title={
        <Stack gap={0}>
          <Title order={3}>
            {role + " "}
            <Text c="dimmed" span inherit>
              {"@ " + organisation}
            </Text>
          </Title>
          <Text fs="italic" c="dimmed" size="lg">
            {date}
          </Text>
        </Stack>
      }
    >
      {children}
    </Timeline.Item>
  );
}

export default ExperienceTimelineItem;
