import {
  BackgroundImage,
  Group,
  Paper,
  Stack,
  Title,
  Image,
  Text,
} from "@mantine/core";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

import banner from "../assets/banner.jpeg";
import portrait from "../assets/portrait.jpeg";

function Banner() {
  const sharedIconProps = { size: "md", iconProps: { size: 25 } };

  return (
    <BackgroundImage src={banner} radius="md" pos="relative" p="lg">
      <Group
        gap={10}
        justify="flex-end"
        wrap="nowrap"
        pos="absolute"
        top={0}
        right={0}
        m={8}
      >
        <LinkedInIcon {...sharedIconProps}></LinkedInIcon>
        <GitHubIcon {...sharedIconProps}></GitHubIcon>
      </Group>
      <Group align="center" gap="xl" p="md">
        <Image radius="50%" src={portrait} h={140} w="auto"></Image>
        <Paper radius="md" p="md" withBorder>
          <Stack gap={3}>
            <Title size="3.5rem">Hello, I'm Lukas</Title>
            <Text size="xl">
              Final-Year M.Sc. Student in AI/ML @ Linköping University
            </Text>
          </Stack>
        </Paper>
      </Group>
    </BackgroundImage>
  );
}

export default Banner;
