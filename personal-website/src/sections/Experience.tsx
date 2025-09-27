import { Timeline } from "@mantine/core";
import ExperienceTimelineItem from "../components/ExperienceTimelineItem";
import Section from "../components/Section";

import { EXPERIENCE_DATA } from "../data/experience.data";

function Experience() {
  return (
    <Section title="Experience">
      <Timeline bulletSize={20}>
        {EXPERIENCE_DATA.map((experience, index) => (
          <ExperienceTimelineItem key={index} {...experience} />
        ))}
      </Timeline>
    </Section>
  );
}

export default Experience;
