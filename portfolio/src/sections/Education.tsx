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
import { useState } from "react";

const mscSemesterTitles: { [key: number]: string } = {
  6: "B.Sc. Thesis",
  7: "Exchange @ KAIST, South Korea",
  10: "M.Sc. Thesis",
};

const mscSemesterData = [
  [
    { code: "TDDC75", name: "Discrete Structures" },
    { code: "TDDC77", name: "Object Oriented Programming" },
    { code: "TDDD39", name: "Perspectives on Information Technology" },
    { code: "TATB04", name: "Introductory Course in Calculus" },
  ],
  [
    { code: "TATA41", name: "Calculus in One Variable 1" },
    { code: "TDTS11", name: "Computer Networks and Internet Protocols" },
    { code: "TFYA15", name: "Models in Physics" },
    { code: "TGTU79", name: "Law for IT and Ethics" },
    { code: "TSEA77", name: "Computer Hardware and Architecture" },
  ],
  [
    { code: "TATA24", name: "Linear Algebra" },
    { code: "TDDE22", name: "Data Structures and Algorithms" },
    { code: "TDDE43", name: "Design and Development of Interactive Systems" },
    { code: "TGTU82", name: "Diversity and Gender in Application Development" },
  ],
  [
    { code: "TDDE47", name: "Concurrent Programming and Operating Systems" },
    { code: "TINF01", name: "IT for Sustainability" },
    { code: "TSBB32", name: "Linear Systems" },
    { code: "TATA91", name: "Calculus in One and Several Variables" },
  ],
  [
    { code: "TAMS42", name: "Probability and Statistics, First Course" },
    { code: "TAOP89", name: "Optimization for IT" },
    { code: "TDDE48", name: "Mobile Networks" },
    { code: "TDDD37", name: "Database Technology" },
    { code: "TSRT19", name: "Automatic Control" },
  ],
  [
    {
      code: "TDDE53",
      name: "Secure Systems: Project Semester including Bachelor Thesis Project",
    },
    { code: "TEIO97", name: "Leadership" },
    { code: "TPTE06", name: "Industrial Placement" },
  ],
  [
    { code: "EE412", name: "Foundation of Big Data Analytics" },
    { code: "EE488", name: "Deep Learning for Computer Vision" },
    { code: "AI504", name: "Programming for AI" },
  ],
  [
    { code: "TDDE09", name: "Natural Language Processing" },
    { code: "TDDD95", name: "Algorithmic Problem Solving" },
    { code: "TDDE61", name: "Ethical Hacking" },
    { code: "TDDD27", name: "Advanced Web Programming" },
  ],
  [
    { code: "TDDC17", name: "Artificial Intelligence" },
    { code: "TANA21", name: "Scientific Computing" },
    {
      code: "TDDE19",
      name: "Advanced Project Course - AI and Machine Learning",
    },
    { code: "TGTU99", name: "Ethical Issues in AI" },
    { code: "TDDD89", name: "Scientific Method" },
  ],
  [{ code: "TQXX33", name: "Degree project - Master's Thesis" }],
];

function Education() {
  const [degreeAccordionValue, setDegreeAccordionValue] = useState<
    string | null
  >(null);
  const [mscOpenedItems, setMscOpenedItems] = useState<string[]>([]);
  const [showGpa, setShowGpa] = useState(false);

  const allMscItemValues = mscSemesterData.map((_, index) => String(index));
  const allMscItemsOpened = mscOpenedItems.length === allMscItemValues.length;

  const mscSemesterItems = mscSemesterData.map((semester, index) => (
    <Accordion.Item key={index} value={String(index)}>
      {/* index + 1 is equal to semester number */}
      <Accordion.Control>
        {`Semester ${index + 1}`}
        {mscSemesterTitles[index + 1] && (
          <Text span>
            {": "}
            <Text c="dimmed" span>
              {mscSemesterTitles[index + 1]}
            </Text>
          </Text>
        )}
      </Accordion.Control>
      <Accordion.Panel>
        <Table>
          <Table.Tbody>
            {semester.map((course) => (
              <Table.Tr key={course.code}>
                <Table.Td style={{ width: 100 }}>{course.code}</Table.Td>
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
      <Accordion
        variant="contained"
        value={degreeAccordionValue}
        onChange={setDegreeAccordionValue}
      >
        <Accordion.Item value="msc">
          <Accordion.Control>
            <Group justify="space-between" pr="lg">
              <Stack gap="xs">
                <Stack gap={0}>
                  <Title order={3}>Linköping University</Title>
                  <Text size="lg">
                    Master of Science in Engineering – MSE (Swedish:
                    Civilingenjör), Information Technology
                  </Text>
                  <Text fs="italic" c="dimmed" size="lg">
                    Aug 2021 – Jun 2026
                  </Text>
                </Stack>
                <Text>Specialization: AI and Machine Learning</Text>
                {degreeAccordionValue === "msc" && (
                  <Paper
                    withBorder
                    shadow="xs"
                    p="xs"
                    style={{
                      cursor: "default",
                      display: "inline-block",
                      maxWidth: 90,
                      width: "auto",
                      textAlign: "center",
                    }}
                    onClick={(event) => event.stopPropagation()}
                    onMouseEnter={() => setShowGpa(true)}
                    onMouseLeave={() => setShowGpa(false)}
                  >
                    {showGpa ? "5.0 / 5.0" : "GPA"}
                  </Paper>
                )}
              </Stack>
              {degreeAccordionValue === "msc" && (
                <Button
                  onClick={(event) => {
                    event.stopPropagation();
                    setMscOpenedItems(
                      allMscItemsOpened ? [] : allMscItemValues
                    );
                  }}
                >
                  {allMscItemsOpened ? "Collapse All" : "Expand All"}
                </Button>
              )}
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            {/* wrap with paper to inherit bg color */}
            <Paper>
              <Accordion
                variant="contained"
                multiple
                value={mscOpenedItems}
                onChange={setMscOpenedItems}
              >
                {mscSemesterItems}
              </Accordion>
            </Paper>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="exchange">
          <Accordion.Control>
            <Group justify="space-between" pr="lg">
              <Stack gap="xs">
                <Stack gap={0}>
                  <Title order={3}>
                    Korea Advanced Institute of Science and Technology (KAIST)
                  </Title>
                  <Text size="lg">
                    Exchange Semester, AI and Machine Learning
                  </Text>
                  <Text fs="italic" c="dimmed" size="lg">
                    Aug 2024 – Jan 2025
                  </Text>
                </Stack>
              </Stack>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>Fix later</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}

export default Education;
