import { Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Section from "../components/Section";
import { ABOUT_ME_DATA } from "../data/aboutme.data";

function AboutMe() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Section title="About Me">
      <Text size={isMobile ? "md" : "lg"}>{ABOUT_ME_DATA}</Text>
    </Section >
  );
}

export default AboutMe;
