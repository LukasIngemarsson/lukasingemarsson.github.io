import { Carousel } from "@mantine/carousel";
import { Stack, Title } from "@mantine/core";
import ProjectCarouselSlide from "../components/ProjectCarouselSlide";

import { SLIDE_DATA } from "../data/projects.data";

function Projects() {
  return (
    <Stack>
      <Title order={1}>Projects</Title>
      <Carousel
        controlsOffset="xs"
        slideSize="75%"
        height={300}
        w="50%"
        bg="gray"
        style={{ borderRadius: "0.5rem", overflow: "hidden" }}
      >
        {SLIDE_DATA.map((slide, idx) => (
          <ProjectCarouselSlide
            key={slide.title}
            {...slide}
            isEven={idx % 2 === 0}
          />
        ))}
      </Carousel>
    </Stack>
  );
}

export default Projects;
