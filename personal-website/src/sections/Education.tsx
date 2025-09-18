import {
  Accordion,
  Table,
  Title,
  Text,
  Stack,
  Button,
  Group,
  Paper,
  Anchor,
} from "@mantine/core";
import EducationAccordionItem from "../components/EducationAccordionItem";

import { useRef, useState } from "react";

import {
  MSC_PROPS,
  MSC_SEMESTER_TITLES,
  MSC_SEMESTER_DATA,
  EXCHANGE_PROPS,
} from "../data/education.data";

function Education() {
  const [mscOpenedItems, setMscOpenedItems] = useState<string[]>([]);
  const [showGpa, setShowGpa] = useState(false);
  const [openedParentAccordion, setOpenedParentAccordion] = useState<
    string | null
  >(null);
  const exchangeRef = useRef<HTMLDivElement>(null);
  const exchangeCoursesRef = useRef<HTMLDivElement>(null);

  const allMscItemValues = MSC_SEMESTER_DATA.map((_, index) =>
    String(index + 1)
  );
  const allMscItemsOpened = mscOpenedItems.length === allMscItemValues.length;

  const handleExchangeClick = () => {
    if (openedParentAccordion !== "msc") return;
    setMscOpenedItems([]);
    setOpenedParentAccordion("exchange");
    setTimeout(() => {
      exchangeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  };

  const redirectToExchangeCourses = () => {
    setMscOpenedItems(["7"]);
    setOpenedParentAccordion("msc");
    setTimeout(() => {
      exchangeCoursesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  };

  const mscSemesterItems = MSC_SEMESTER_DATA.map((semester, index) => {
    const semesterNum = index + 1;
    const item = (
      <Accordion.Item
        key={semesterNum}
        value={String(semesterNum)}
        ref={semesterNum === 7 ? exchangeCoursesRef : undefined}
      >
        <Accordion.Control>
          {`Semester ${semesterNum}`}
          {MSC_SEMESTER_TITLES[semesterNum] && (
            <Text span>
              {": "}
              <Text c="dimmed" span>
                {MSC_SEMESTER_TITLES[semesterNum]}
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
    );

    return item;
  });

  return (
    <Stack>
      <Title order={1}>Education</Title>
      <Accordion
        variant="contained"
        value={openedParentAccordion}
        onChange={setOpenedParentAccordion}
      >
        <EducationAccordionItem {...MSC_PROPS}>
          <Group justify="space-between" pb="10px">
            <Paper
              withBorder
              shadow="xs"
              p="xs"
              display="inline-block"
              w="90px"
              style={{
                cursor: "default",
                textAlign: "center",
              }}
              onClick={(event) => event.stopPropagation()}
              onMouseEnter={() => setShowGpa(true)}
              onMouseLeave={() => setShowGpa(false)}
            >
              {showGpa ? "5.0/5.0" : "GPA"}
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
            multiple
            value={mscOpenedItems}
            onChange={setMscOpenedItems}
          >
            {mscSemesterItems}
          </Accordion>
        </EducationAccordionItem>
        <div ref={exchangeRef}>
          <EducationAccordionItem
            onClick={handleExchangeClick}
            {...EXCHANGE_PROPS}
          >
            <Anchor onClick={redirectToExchangeCourses}>See courses</Anchor>
          </EducationAccordionItem>
        </div>
      </Accordion>
    </Stack>
  );
}

export default Education;
