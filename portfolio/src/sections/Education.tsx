import {
  Accordion,
  Table,
  Title,
  Text,
  Stack,
  Button,
  Group,
  Paper,
} from "@mantine/core";
import EducationAccordionItem from "../components/EducationAccordionItem";

import { useState } from "react";

import { MSC_SEMESTER_TITLES, MSC_SEMESTER_DATA } from "../data/education.data";

function Education() {
  const [mscOpenedItems, setMscOpenedItems] = useState<string[]>([]);
  const [showGpa, setShowGpa] = useState(false);

  const allMscItemValues = MSC_SEMESTER_DATA.map((_, index) => String(index));
  const allMscItemsOpened = mscOpenedItems.length === allMscItemValues.length;

  const mscSemesterItems = MSC_SEMESTER_DATA.map((semester, index) => (
    <Accordion.Item key={index} value={String(index)}>
      {/* index + 1 is equal to semester number */}
      <Accordion.Control>
        {`Semester ${index + 1}`}
        {MSC_SEMESTER_TITLES[index + 1] && (
          <Text span>
            {": "}
            <Text c="dimmed" span>
              {MSC_SEMESTER_TITLES[index + 1]}
            </Text>
          </Text>
        )}
      </Accordion.Control>
      <Accordion.Panel>
        <Table>
          <Table.Tbody>
            {semester.map((course) => (
              <Table.Tr key={course.code}>
                <Table.Td w={100}>{course.code}</Table.Td>
                <Table.Td>{course.name}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack>
      <Title order={1}>Education</Title>
      <Accordion variant="contained">
        <EducationAccordionItem
          value="msc"
          university="Linköping University"
          program="Master of Science in Engineering – MSE (Swedish:
                    Civilingenjör), Information Technology"
          date="Aug 2021 – Jun 2026"
          comment="Specialization: AI and Machine Learning"
        >
          <Accordion.Panel>
            <Group justify="space-between" pb="10px">
              <Paper
                withBorder
                shadow="xs"
                p="xs"
                display="inline-block"
                w="100px"
                style={{
                  cursor: "default",
                  textAlign: "center",
                }}
                onClick={(event) => event.stopPropagation()}
                onMouseEnter={() => setShowGpa(true)}
                onMouseLeave={() => setShowGpa(false)}
              >
                {showGpa ? "5.0 / 5.0" : "GPA"}
              </Paper>
              <Button
                onClick={(event) => {
                  event.stopPropagation();
                  setMscOpenedItems(allMscItemsOpened ? [] : allMscItemValues);
                }}
              >
                {allMscItemsOpened ? "Collapse All" : "Expand All"}
              </Button>
            </Group>
            <Accordion
              variant="contained"
              multiple
              value={mscOpenedItems}
              onChange={setMscOpenedItems}
            >
              {mscSemesterItems}
            </Accordion>
          </Accordion.Panel>
        </EducationAccordionItem>
        <EducationAccordionItem
          value="exchange"
          university="Korea Advanced Institute of Science and Technology (KAIST)"
          program="Exchange Semester, AI and Machine Learning"
          date="Aug 2024 – Jan 2025"
        >
          <Accordion.Panel>Fix later</Accordion.Panel>
        </EducationAccordionItem>
      </Accordion>
    </Stack>
  );
}

export default Education;
