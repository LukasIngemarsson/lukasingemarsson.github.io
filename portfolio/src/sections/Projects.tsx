import { Carousel } from "@mantine/carousel";
import { Paper, Stack, Title } from "@mantine/core";
import ProjectCarouselSlide from "../components/ProjectCarouselSlide";

import { SLIDE_DATA } from "../data/projects.data";

function Projects() {
  return (
    <Stack>
      <Title order={1}>Projects</Title>
      <Paper withBorder w="50%" p={0}>
        <Carousel
          height={300}
          controlsOffset="xs"
          controlSize={24}
          slideSize="80%"
          slideGap="sm"
        >
          {SLIDE_DATA.map((slide, idx) => (
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
