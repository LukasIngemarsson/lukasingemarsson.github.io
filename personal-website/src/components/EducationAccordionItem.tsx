import { Accordion, Group, Stack, Text, Title, type AccordionItemProps } from "@mantine/core";

import type { ReactNode } from "react";

type Props = AccordionItemProps & {
  university: string;
  program: string;
  date: string;
  children: ReactNode;
  comment?: string;
};

function EducationAccordionItem({
  university,
  program,
  date,
  children,
  comment,
  ...accordionItemProps
}: Props) {
  return (
    <Accordion.Item {...accordionItemProps}>
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
