import { Group, Paper, Stack, Title, Image, Text, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import banner from "../assets/banner.jpeg";
import portrait from "../assets/portrait.jpeg";
import BlurredBackground from "./BlurredBackground";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon.tsx";

function Banner() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const iconColor = "rgba(255, 255, 255, 0.75)";

  return (
    <Paper style={{ overflow: "hidden" }} withBorder>
      <BlurredBackground src={banner}>
        <Group pos="absolute" top={10} right={10} gap={10} visibleFrom="md">
          <LinkedInIcon c={iconColor} style={{ borderColor: iconColor }}></LinkedInIcon>
          <GitHubIcon c={iconColor} style={{ borderColor: iconColor }}></GitHubIcon>
        </Group>
        <Flex
          direction="row"
          gap="lg"
          align="center"
          px={isMobile ? 0 : "xl"}
          py={isMobile ? 0 : "md"}
        >
          <Image radius="50%" src={portrait} h={140} w={140} visibleFrom="sm" />
          <Stack gap={3} p={isMobile ? "md" : 0} ta="left">
            <Title c="white" size={isMobile ? "3rem" : "3.5rem"}>
              {!isMobile && "Hello, "}I'm Lukas
            </Title>
            <Text c="white" size="xl" style={{ textWrap: "pretty" }}>
              Final-Year M.Sc. Student in AI/ML @ Linköping University
            </Text>
          </Stack>
        </Flex>
      </BlurredBackground>
    </Paper>
  );
}

export default Banner;
