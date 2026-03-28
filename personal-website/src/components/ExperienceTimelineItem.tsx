import {
  Timeline,
  Stack,
  Title,
  Text,
  Button,
  Collapse,
  Box,
  Anchor,
} from "@mantine/core";
import {
  IconChevronUp,
  IconChevronDown,
  IconExternalLink,
} from "@tabler/icons-react";
import { useState, type ReactNode } from "react";

type Props = {
  role: string;
  organisation: string;
  organisationUrl?: string;
  date: string;
  description: string;
  extra?: ReactNode;
};

function ExperienceTimelineItem({
  role,
  organisation,
  organisationUrl,
  date,
  description,
  extra,
}: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <Timeline.Item
      title={
        <Stack gap={0}>
          <Title order={3}>
            {role + " "}
            {organisationUrl ? (
              <Anchor
                href={organisationUrl}
                target="_blank"
                rel="noreferrer"
                c="dimmed"
                underline="hover"
                inherit
              >
                {"@ " + organisation + " "}
                <IconExternalLink
                  size={14}
                  style={{ verticalAlign: "middle" }}
                />
              </Anchor>
            ) : (
              <Text c="dimmed" span inherit>
                {"@ " + organisation}
              </Text>
            )}
          </Title>
          <Text fs="italic" c="dimmed" size="lg">
            {date}
          </Text>
        </Stack>
      }
    >
      <Text style={{ textWrap: "pretty" }}>{description}</Text>
      {extra && (
        <>
          <Button
            variant="transparent"
            size="sm"
            mt="sm"
            p={0}
            h="auto"
            rightSection={
              opened ? (
                <IconChevronUp size={14} />
              ) : (
                <IconChevronDown size={14} />
              )
            }
            onClick={() => setOpened((o) => !o)}
            c="dimmed"
            fw={400}
          >
            {opened ? "See less" : "See more"}
          </Button>
          <Collapse in={opened}>
            <Box mt="md">{extra}</Box>
          </Collapse>
        </>
      )}
    </Timeline.Item>
  );
}

export default ExperienceTimelineItem;
