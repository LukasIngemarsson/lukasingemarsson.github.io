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

  const maxButtonWidth = 210;
  const backgroundColor = isEven ? "var(--primary)" : "var(--secondary)";

  return (
    <Carousel.Slide key={title} p="lg" pos="relative" bg={backgroundColor}>
      <Stack gap="xs">
        <Title order={2}>{title}</Title>
        <Text style={{ textWrap: "pretty" }}>{description}</Text>
      </Stack>
      {repoNames.length === 1 ? (
        <GitHubRepoButton
          repoName={repoNames[0]}
          pos="absolute"
          bottom={0}
          right={0}
          m="md"
          maw={maxButtonWidth}
          iconProps={{ size: 30 }}
        />
      ) : (
        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          pos="absolute"
          bottom={0}
          right={0}
          m="md"
          w={maxButtonWidth}
          variant="default"
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
                repoName={repo}
                iconProps={{ size: 30 }}
                w={maxButtonWidth}
                style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
              />
            </Tabs.Panel>
          ))}
        </Tabs>
      )}
    </Carousel.Slide>
  );
}

export default ProjectCarouselSlide;
