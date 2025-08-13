import {
  TypographyStylesProvider,
  Anchor,
  Title,
  List,
  Text,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const arcticGamingDescription = (
  <TypographyStylesProvider>
    <Text>
      Competed internationally as a professional player in the strategy game{" "}
      <Anchor href="https://en.wikipedia.org/wiki/Clash_Royale" target="_blank">
        Clash Royale
      </Anchor>
      , both individually and in a team environment. <br />
    </Text>
    <Title order={4}>Most Significant Achievements</Title>
    <List icon={<IconChevronRight size={12} />} pl={0}>
      <List.Item>
        Red Bull Mobile Esports Open Swedish Championship: 1st place, Stockholm
        (
        <Anchor
          href="https://www.redbull.com/se-en/meo-sweden-2018"
          target="_blank"
        >
          Red Bull Interview
        </Anchor>
        )
      </List.Item>
      <List.Item>
        Red Bull Mobile Esports Open World Championship: Top 5–8, Dortmund
      </List.Item>
      <List.Item>LVP SuperLiga Orange: 2nd place, Madrid</List.Item>
      <List.Item>
        World Cyber Games European Finals: 3rd place, Athens
      </List.Item>
      <List.Item>Dreamhack Summer Mobile Series: Top 5–8, Jönköping</List.Item>
    </List>
    <Title order={4}>Live Streaming</Title>
    <Text>
      During my time as an avid Clash Royale player, I was engaged in live
      streaming on Twitch. Following the Red Bull events, I occasionally visited
      the Red Bull office in Stockholm to host live streams with their
      equipment.
    </Text>
  </TypographyStylesProvider>
);

export const EXPERIENCE_DATA = [
  {
    role: "Autonomous Systems Summer Substitute",
    organisation: "TRATON",
    date: "Jun 2025 – Aug 2025",
    description:
      "Developed an automatic traffic accident scenario extraction pipeline, \
      generating intricate simulation scenario code from minimal image-text input data.",
  },
  {
    role: "Autonomous Systems Summer Substitute",
    organisation: "Scania",
    date: "Jun 2024 – Aug 2024",
    description:
      "Worked with ML-based lane detection solutions for offline perception in \
      autonomous vehicles.",
  },
  {
    role: "Autonomous Systems Summer Intern",
    organisation: "Scania",
    date: "Jun 2023 – Aug 2023",
    description:
      "Completed a 3-stage project surrounding the V&V, segmentation, and \
      application of in-house autonomous vehicle data.",
  },
  {
    role: "Teaching Assistant",
    organisation: "Linköping University",
    date: "Jan 2023 – May 2023",
    description:
      "Was responsible for a group of first-year IT students, offering guidance in \
      questions regarding all of their ongoing courses.",
  },
  {
    role: "Professional Esports Player",
    organisation: "Arctic Gaming",
    date: "Nov 2018 – Aug 2019",
    description: arcticGamingDescription,
  },
];
