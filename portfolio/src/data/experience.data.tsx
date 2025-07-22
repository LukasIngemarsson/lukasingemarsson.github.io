import {
  TypographyStylesProvider,
  Anchor,
  Title,
  List,
  Text,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

/* Stored the experience descriptions directly as JSX elements, as the
format between different experience's differed a lot. */

const scaniaTratonDescription = (
  <TypographyStylesProvider>
    <Text>
      Summer '25: Developed an automatic scenario extraction tool, using LLMs to
      handle sparse image-text input data.
    </Text>
    <Text>
      Summer '24: Worked with ML-based lane detection solutions for offline
      perception in autonomous vehicles.
    </Text>
    <Text>
      Summer '23: Completed a 3-stage project surrounding the V&V, segmentation,
      and application of in-house autonomous vehicle data.
    </Text>
  </TypographyStylesProvider>
);

const linkopingUniversityDescription = (
  <TypographyStylesProvider>
    <Text>
      Was responsible for a group of first-year IT students, offering guidance
      in questions regarding all of their ongoing courses.
    </Text>
  </TypographyStylesProvider>
);

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
    <List icon={<IconChevronRight size={12} />}>
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
    role: "Autonomous Systems Intern",
    organisation: "Scania/TRATON",
    date: "Summers 2023/24/25",
    description: scaniaTratonDescription,
  },
  {
    role: "Teaching Assistant",
    organisation: "Linköping University",
    date: "Jan 2023 – May 2023",
    description: linkopingUniversityDescription,
  },
  {
    role: "Professional Esports Player",
    organisation: "Arctic Gaming",
    date: "Nov 2018 – Aug 2019",
    description: arcticGamingDescription,
  },
];
