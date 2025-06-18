import {
  Stack,
  Timeline,
  Title,
  Text,
  Anchor,
  List,
  Paper,
} from "@mantine/core";

function Experience() {
  return (
    <Stack>
      <Title order={1}>Experience</Title>
      <Timeline bulletSize={20}>
        <Timeline.Item
          title={
            <Title order={2}>
              2018/19: Professional Esports Player @ Arctic Gaming
            </Title>
          }
        >
          <Paper shadow="xs" withBorder p="md">
            <Text>
              Competed internationally as a professional player in the strategy
              game{" "}
              <Anchor
                href="https://en.wikipedia.org/wiki/Clash_Royale"
                target="_blank"
              >
                Clash Royale
              </Anchor>
              , both individually and in a team environment.
              <br />
              <br />
              Most significant achievements:
            </Text>
            <List>
              <List.Item>
                Red Bull Mobile Esports Open Swedish Championship: 1st place,
                Stockholm
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
          </Paper>
        </Timeline.Item>
        <Timeline.Item
          title={
            <Title order={2}>
              2023: Teaching Assistant @ Linköping University
            </Title>
          }
        >
          <Paper shadow="xs" withBorder p="md">
            <Text>
              Was responsible for a group of first-year IT students, offering
              guidance in questions regarding all of their ongoing courses.
            </Text>
          </Paper>
        </Timeline.Item>
        <Timeline.Item
          title={
            <Title order={2}>
              2023/24/25: Autonomous Systems Intern @ Scania/TRATON
            </Title>
          }
        >
          <Paper shadow="xs" withBorder p="md">
            <Text>
              Summer '23: Completed a 3-stage project surrounding the V&V,
              segmentation, and application of autonomous vehicle data.
              <br />
              Summer '24: Worked with and evaluated ML-based lane detection
              solutions for offline perception.
              <br />
              Summer '25: ...
            </Text>
          </Paper>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
}

export default Experience;
