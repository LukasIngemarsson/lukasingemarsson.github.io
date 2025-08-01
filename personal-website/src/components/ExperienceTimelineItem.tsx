import { Timeline, Stack, Title, Text } from "@mantine/core";

import type { ReactNode } from "react";

type Props = {
  key: number;
  role: string;
  organisation: string;
  date: string;
  description: string | ReactNode;
};

function ExperienceTimelineItem({
  key,
  role,
  organisation,
  date,
  description,
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
      {typeof description === "string" ? (
        <Text>{description}</Text>
      ) : (
        description
      )}
    </Timeline.Item>
  );
}

export default ExperienceTimelineItem;
