import { Stack, Timeline, Title, Text } from "@mantine/core";
import ExperienceTimelineItem from "../components/ExperienceTimelineItem";

import { EXPERIENCE_DATA } from "../data/experience.data";

function Experience() {
  return (
    <Stack>
      <Stack gap={0}>
        <Text size="s" c="dimmed">
          (Notable)
        </Text>
        <Title order={1}>Experience</Title>
      </Stack>
      <Timeline bulletSize={20}>
        {EXPERIENCE_DATA.map((experience, index) => (
          <ExperienceTimelineItem key={index} {...experience} />
        ))}
      </Timeline>
    </Stack>
  );
}

export default Experience;
