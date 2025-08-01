import { Accordion, Group, Stack, Text, Title } from "@mantine/core";

import type { ReactNode } from "react";

type Props = {
  value: string;
  university: string;
  program: string;
  date: string;
  children: ReactNode;
  onClick?: () => void;
  comment?: string;
};

function EducationAccordionItem({
  value,
  university,
  program,
  date,
  children,
  onClick,
  comment,
}: Props) {
  return (
    <Accordion.Item value={value} onClick={onClick}>
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
