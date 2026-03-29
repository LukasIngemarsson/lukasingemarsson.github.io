import { Accordion, Group, Stack, Text, Title, type AccordionItemProps } from "@mantine/core";

import type { ReactNode } from "react";

type Props = AccordionItemProps & {
  university: string;
  program: string;
  date: string;
  children: ReactNode;
  comment?: string;
  gpa?: string;
  headerRight?: ReactNode;
};

function EducationAccordionItem({
  university,
  program,
  date,
  children,
  comment,
  gpa,
  headerRight,
  ...accordionItemProps
}: Props) {
  return (
    <Accordion.Item {...accordionItemProps}>
      <Accordion.Control>
        <Group justify="space-between" align="center" pr="lg" wrap="nowrap">
          <Stack gap="xs">
            <Stack gap={0}>
              <Title order={3}>{university}</Title>
              <Text size="lg">{program}</Text>
              <Text fs="italic" c="dimmed" size="lg">
                {date}
              </Text>
            </Stack>
            {(comment || gpa) && (
              <Text>
                {gpa && <Text span fw={700}>GPA: {gpa}</Text>}
                {comment && gpa && " | "}
                {comment}
              </Text>
            )}
          </Stack>
          {headerRight}
        </Group>
      </Accordion.Control>
      <Accordion.Panel>{children}</Accordion.Panel>
    </Accordion.Item>
  );
}

export default EducationAccordionItem;
