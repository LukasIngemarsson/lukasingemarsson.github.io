import { Carousel } from "@mantine/carousel";
import { Stack, Title } from "@mantine/core";

function Projects() {
  return (
    <Stack>
      <Title order={1}>Projects</Title>
      <Carousel
        slideSize="70%"
        height={300}
        w="50%"
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: "center",
        }}
      >
        <Carousel.Slide bg="blue">1</Carousel.Slide>
        <Carousel.Slide bg="red">2</Carousel.Slide>
        <Carousel.Slide bg="green">3</Carousel.Slide>
      </Carousel>
    </Stack>
  );
}

export default Projects;
