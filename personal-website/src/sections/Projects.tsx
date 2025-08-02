import { Carousel } from "@mantine/carousel";
import { Paper, Stack, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ProjectCarouselSlide from "../components/ProjectCarouselSlide";

import { PROJECTS_DATA } from "../data/projects.data";

function Projects() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Stack>
      <Title order={1}>Projects</Title>
      <Paper withBorder p={0}>
        <Carousel
          height={isMobile ? 350 : isTablet ? 275 : 300}
          controlsOffset="xs"
          controlSize={isMobile ? 32 : 24}
          slideSize={isMobile ? "100%" : isTablet ? "75%" : "50%"}
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
    </Stack>
  );
}

export default Projects;
