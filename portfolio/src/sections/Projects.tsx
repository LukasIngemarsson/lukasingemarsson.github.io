import { Carousel } from "@mantine/carousel";
import { Stack, Title } from "@mantine/core";
import ProjectCarouselSlide from "../components/ProjectCarouselSlide";

const slideData = [
  {
    title: "Venom",
    description:
      "A lightweight data-collection framework for identifying and quantifying illicit \
      Bitcoin activity on Dark Web marketplaces.",
    repoNames: ["venom"],
  },
  {
    title: "Algorithmic Problem Solving",
    description:
      "I have recreationally solved algorithmic coding problems, mainly on Kattis and \
      UVa Online Judge. My solutions to these problems are recorded, and the algorithms \
      that I have implemented are consolidated in a small library.",
    repoNames: ["kattis", "uva-online-judge", "algo-lib"],
  },
  {
    title: "Musicle",
    description:
      "A social music app notably featuring a multi-player music quiz that takes each \
      participants' Spotify listening habits into account, and a queue session with a \
      fair voting system.",
    repoNames: ["musicle"],
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website that I created as a fun side project, which you are looking\
      at right now!",
    repoNames: ["portfolio"],
  },
];

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
        {slideData.map((slide, idx) => (
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
