import { Carousel } from "@mantine/carousel";
import { Paper, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

import ProjectCarouselSlide from "../components/ProjectCarouselSlide";
import Section from "../components/Section";
import { PROJECTS_DATA } from "../data/projects.data";

function Projects() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Section title="Projects">
      <Paper withBorder p={0} style={{ overflow: "hidden" }}>
        <Carousel
          height={isMobile ? 350 : isTablet ? 275 : 300}
          controlsOffset="xs"
          slideSize={isMobile ? "100%" : isTablet ? "75%" : "50%"}
          controlSize={30}
          nextControlIcon={<IconArrowRight size={24} />}
          previousControlIcon={<IconArrowLeft size={24} />}
          withControls={!isMobile}
          withIndicators={isTablet}
        >
          {PROJECTS_DATA.map((slide, idx) => (
            <ProjectCarouselSlide
              key={slide.title}
              {...slide}
              isEven={idx % 2 === 0}
            />
          ))}
        </Carousel>
      </Paper>
    </Section>
  );
}

export default Projects;
