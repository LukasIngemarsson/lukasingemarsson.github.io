import { Carousel } from "@mantine/carousel";
import { Paper, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

import ProjectCarouselSlide from "../components/ProjectCarouselSlide";
import Section from "../components/Section";
import { PROJECTS_DATA } from "../data/projects.data";

function Projects() {
  const theme = useMantineTheme();
  const isSmallMobile = useMediaQuery("(max-width: 590px)");
  const isMobileOrTablet = useMediaQuery(
    `(max-width: ${theme.breakpoints.md})`,
  );

  const slides =
    PROJECTS_DATA.length % 2 === 0
      ? PROJECTS_DATA
      : [...PROJECTS_DATA, ...PROJECTS_DATA];

  return (
    <Section title="Projects">
      <Paper withBorder p={0} style={{ overflow: "hidden" }}>
        <Carousel
          height={isMobileOrTablet ? 350 : 300}
          controlsOffset="xs"
          slideSize={isSmallMobile ? "100%" : isMobileOrTablet ? "60%" : "50%"}
          controlSize={30}
          nextControlIcon={<IconArrowRight size={24} />}
          previousControlIcon={<IconArrowLeft size={24} />}
          withControls={!isSmallMobile && !isMobileOrTablet}
          withIndicators={isSmallMobile || isMobileOrTablet}
          emblaOptions={{ loop: true }}
        >
          {slides.map((slide, idx) => (
            <ProjectCarouselSlide
              key={`${slide.title}-${idx}`}
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
