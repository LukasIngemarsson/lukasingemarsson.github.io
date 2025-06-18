import { Accordion, Table, Title, Text, Stack } from "@mantine/core";

const semesterData = [
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
    { code: "TDDC17", name: "Artifical Intelligence" },
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
  const semesterItems = semesterData.map((semester, index) => (
    <Accordion.Item key={index} value={String(index)}>
      <Accordion.Control>
        {`Semester ${index + 1}${
          index + 1 == 7 ? ": Exchange @ KAIST, South Korea" : ""
        }`}
      </Accordion.Control>
      <Accordion.Panel>
        <Table>
          <Table.Tbody>
            {semester.map((course) => (
              <Table.Tr key={course.code}>
                <Table.Td>{course.code}</Table.Td>
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
      <Title order={2}>M.Sc. in Engineering - Information Technology</Title>
      <Text>
        {"Linköping University (2021 – 2026) "}
        <Text fs="italic" c="dimmed" span>
          Specialization: AI and Machine Learning
        </Text>
      </Text>
      <Accordion variant="contained">{semesterItems}</Accordion>
    </Stack>
  );
}

export default Education;
