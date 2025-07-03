import { Timeline, Stack, Title, Text } from "@mantine/core";
import type { ReactNode } from "react";

type Props = {
  role: string;
  organisation: string;
  date: string;
  children: ReactNode;
};

function ExperienceTimelineItem({ role, organisation, date, children }: Props) {
  return (
    <Timeline.Item
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
