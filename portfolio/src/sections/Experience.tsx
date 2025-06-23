import { Stack, Timeline, Title, Text, Anchor, List } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

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
        <Timeline.Item
          title={
            <Stack gap={0}>
              <Title order={3}>
                Professional Esports Player{" "}
                <Text c="dimmed" span inherit>
                  @ Arctic Gaming
                </Text>
              </Title>
              <Text fs="italic" c="dimmed" size="lg">
                Nov 2018 – Aug 2019
              </Text>
            </Stack>
          }
        >
          <Stack gap="lg">
            <Text>
              Competed internationally as a professional player in the strategy
              game{" "}
              <Anchor
                href="https://en.wikipedia.org/wiki/Clash_Royale"
                target="_blank"
              >
                Clash Royale
              </Anchor>
              , both individually and in a team environment. <br />
            </Text>
            <Stack gap="xs">
              <Title order={4}>Most Significant Achievements</Title>
              <List icon={<IconChevronRight size={12} />}>
                <List.Item>
                  Red Bull Mobile Esports Open Swedish Championship: 1st place,
                  Stockholm (
                  <Anchor
                    href="https://www.redbull.com/se-en/meo-sweden-2018"
                    target="_blank"
                  >
                    Red Bull Interview
                  </Anchor>
                  )
                </List.Item>
                <List.Item>
                  Red Bull Mobile Esports Open World Championship: Top 5–8,
                  Dortmund
                </List.Item>
                <List.Item>LVP SuperLiga Orange: 2nd place, Madrid</List.Item>
                <List.Item>
                  World Cyber Games European Finals: 3rd place, Athens
                </List.Item>
                <List.Item>
                  Dreamhack Summer Mobile Series: Top 5–8, Jönköping
                </List.Item>
              </List>
            </Stack>
            <Stack gap="xs">
              <Title order={4}>Live Streaming</Title>
              <Text>
                Broadcasted esports gameplay with live commentary on the Twitch
                platform, not only remotely, but also from the Red Bull office
                in Stockholm with their equipment.
              </Text>
            </Stack>
          </Stack>
        </Timeline.Item>
        <Timeline.Item
          title={
            <Stack gap={0}>
              <Title order={3}>
                Teaching Assistant{" "}
                <Text c="dimmed" span inherit>
                  @ Linköping University
                </Text>
              </Title>
              <Text fs="italic" c="dimmed" size="lg">
                Jan 2023 – May 2023
              </Text>
            </Stack>
          }
        >
          <Text>
            Was responsible for a group of first-year IT students, offering
            guidance in questions regarding all of their ongoing courses.
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title={
            <Stack gap={0}>
              <Title order={3}>
                Autonomous Systems Intern{" "}
                <Text c="dimmed" span inherit>
                  @ Scania/TRATON
                </Text>
              </Title>
              <Text fs="italic" c="dimmed" size="lg">
                Summers 2023/24/25
              </Text>
            </Stack>
          }
        >
          <Stack>
            <Text>
              '23: Completed a 3-stage project surrounding the V&V,
              segmentation, and application of autonomous vehicle data.
            </Text>
            <Text>
              '24: Worked with ML-based lane detection solutions for offline
              perception in autonomous vehicles.
            </Text>
            <Text>
              '25: Developing an automatic scenario extraction tool, using
              sparse image-text data to generate complete scenario code.
            </Text>
          </Stack>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
}

export default Experience;
