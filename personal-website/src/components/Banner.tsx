import { Stack, Title, Image, Text, Flex } from "@mantine/core";

import banner from "../assets/banner.jpeg";
import portrait from "../assets/portrait.jpeg";
import { useMediaQuery } from "@mantine/hooks";
import BlurredBackground from "./BlurredBackground";

function Banner() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <BlurredBackground src={banner}>
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? "md" : "xl"}
        align="center"
        p="lg"
      >
        <Image radius="50%" src={portrait} h={140} w={140} />
        <Stack gap={3} p="md" ta={isMobile ? "center" : "left"}>
          <Title c="white" size={isMobile ? "3rem" : "3.5rem"}>
            Hello, I'm Lukas
          </Title>
          <Text c="white" size="xl">
            Final-Year M.Sc. Student in AI/ML @ Linköping University
          </Text>
        </Stack>
      </Flex>
    </BlurredBackground>
  );
}

export default Banner;
