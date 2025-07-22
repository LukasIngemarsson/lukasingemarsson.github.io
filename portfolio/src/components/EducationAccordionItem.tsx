import { Accordion, Group, Stack, Text, Title } from "@mantine/core";
import type { ReactNode } from "react";

type Props = {
  value: string;
  university: string;
  program: string;
  date: string;
  comment?: string;
  children: ReactNode;
};

function EducationAccordionItem({
  value,
  university,
  program,
  date,
  comment,
  children,
}: Props) {
  return (
    <Accordion.Item value={value}>
      <Accordion.Control>
        <Group justify="space-between" pr="lg">
          <Stack gap="xs">
            <Stack gap={0}>
              <Title order={3}>{university}</Title>
              <Text size="lg">{program}</Text>
              <Text fs="italic" c="dimmed" size="lg">
                {date}
              </Text>
            </Stack>
            {comment && <Text>{comment}</Text>}
          </Stack>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>{children}</Accordion.Panel>
    </Accordion.Item>
  );
}

export default EducationAccordionItem;
