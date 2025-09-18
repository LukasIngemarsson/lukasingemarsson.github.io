import {
  BackgroundImage,
  Paper,
  Stack,
  Title,
  Image,
  Text,
  Flex,
} from "@mantine/core";

import banner from "../assets/banner.jpeg";
import portrait from "../assets/portrait.jpeg";
import { useMediaQuery } from "@mantine/hooks";

function Banner() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <BackgroundImage
      src={banner}
      radius="md"
      pos="relative"
      p={isMobile ? "sm" : "lg"}
    >
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? "md" : "xl"}
        align="center"
        p="md"
      >
        <Image radius="50%" src={portrait} h={140} w={140}></Image>
        <Paper radius="md" p="md" ta={isMobile ? "center" : "left"} withBorder>
          <Stack gap={3}>
            <Title size={isMobile ? "3rem" : "3.5rem"}>Hello, I'm Lukas</Title>
            <Text size="xl">
              Final-Year M.Sc. Student in AI/ML @ Linköping University
            </Text>
          </Stack>
        </Paper>
      </Flex>
    </BackgroundImage>
  );
}

export default Banner;
