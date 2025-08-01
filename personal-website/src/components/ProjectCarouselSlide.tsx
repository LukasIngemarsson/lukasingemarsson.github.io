import { Carousel } from "@mantine/carousel";
import { Title, Text, Stack, Tabs } from "@mantine/core";
import GitHubRepoButton from "./GitHubRepoButton";

import { useState } from "react";

type Props = {
  title: string;
  description: string;
  repoNames: string[];
  isEven: boolean;
};

function ProjectCarouselSlide({
  title,
  description,
  repoNames,
  isEven,
}: Props) {
  const [activeTab, setActiveTab] = useState<string | null>("0");

  return (
    <Carousel.Slide
      key={title}
      p="lg"
      pos="relative"
      bg={isEven ? "var(--primary)" : "var(--secondary)"}
    >
      <Stack gap="xs">
        <Title order={2}>{title}</Title>
        <Text>{description}</Text>
      </Stack>
      {repoNames.length === 1 ? (
        <GitHubRepoButton
          iconProps={{ size: 30 }}
          repoName={repoNames[0]}
          pos="absolute"
          bottom={0}
          right={0}
          m="md"
        />
      ) : (
        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          pos="absolute"
          bottom={0}
          right={0}
          m="md"
          variant="outline"
        >
          <Tabs.List>
            {repoNames.map((_, idx) => (
              <Tabs.Tab
                key={String(idx)}
                value={String(idx)}
                onMouseEnter={() => setActiveTab(String(idx))}
              >
                {idx + 1}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {repoNames.map((repo, idx) => (
            <Tabs.Panel key={String(idx)} value={String(idx)}>
              <GitHubRepoButton
                iconProps={{ size: 30 }}
                repoName={repo}
                w={210}
              />
            </Tabs.Panel>
          ))}
        </Tabs>
      )}
    </Carousel.Slide>
  );
}

export default ProjectCarouselSlide;
