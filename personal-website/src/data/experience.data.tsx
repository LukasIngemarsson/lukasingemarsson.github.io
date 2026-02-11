import {
  TypographyStylesProvider,
  Anchor,
  Title,
  List,
  Text,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const arcticGamingExtra = (
  <TypographyStylesProvider>
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
    role: "Master's Thesis Student",
    organisation: "Fortnox",
    date: "Jan 2026 – May 2026",
    description:
      "Topic: Graph Neural Networks for Financial Crime Detection.",
  },
  {
    role: "Autonomous Systems Summer Substitute",
    organisation: "TRATON",
    date: "Jun 2025 – Aug 2025",
    description:
      `Developed an end-to-end generative pipeline using LLMs to synthesize
      multi-vehicle crash simulations from sparse image-text input data. Owned the 
      full project lifecycle: setting up a systematic plan, iteratively developing
      the pipeline, and finally packaging the tool for future use in the organization.`,
  },
  {
    role: "Autonomous Systems Summer Substitute",
    organisation: "Scania",
    date: "Jun 2024 – Aug 2024",
    description:
      `Benchmarked and refined ML-based lane detection models for offline perception
      in autonomous vehicles. Became comfortable researching, testing, and tuning ML
      models, as well as developing supporting algorithms to maximize performance.`
  },
  {
    role: "Autonomous Systems Summer Intern",
    organisation: "Scania",
    date: "Jun 2023 – Aug 2023",
    description:
      `Transformed raw autonomous vehicle logs into a clean, extensive dataset of
      risk-assessed driving maneuvers to support safety validation. Acquired practical
      experience with data science techniques related to time series analysis,
      dimensionality reduction, and clustering.`,
  },
  {
    role: "Teaching Assistant",
    organisation: "Linköping University",
    date: "Jan 2023 – May 2023",
    description:
      "Mentored a cohort of first-year IT students, offering guidance in \
      questions regarding all their ongoing courses.",
  },
  {
    role: "Professional Esports Player",
    organisation: "Arctic Gaming",
    date: "Nov 2018 – Aug 2019",
    description:
      "Competed internationally as a signed professional player in the strategy \
      game Clash Royale, both individually and in a team environment. ",
    extra: arcticGamingExtra,
  },
];
