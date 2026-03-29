import { Accordion, Text } from "@mantine/core";
import EducationAccordionItem from "../components/EducationAccordionItem";
import Section from "../components/Section";

import { useState } from "react";

import {
  MSC_PROPS,
  EXCHANGE_PROPS,
  MSC_KEY_COURSES,
  EXCHANGE_KEY_COURSES,
} from "../data/education.data";

function Education() {
  const [openedParentAccordion, setOpenedParentAccordion] = useState<
    string | null
  >(null);

  return (
    <Section title="Education">
      <Accordion
        variant="contained"
        value={openedParentAccordion}
        onChange={setOpenedParentAccordion}
      >
        <EducationAccordionItem {...MSC_PROPS}>
          <Text size="sm">
            <Text span fw={600}>Key Courses: </Text>
            {MSC_KEY_COURSES.join(", ")}
          </Text>
        </EducationAccordionItem>
        <EducationAccordionItem {...EXCHANGE_PROPS}>
          <Text size="sm">
            <Text span fw={600}>Key Courses: </Text>
            {EXCHANGE_KEY_COURSES.join(", ")}
          </Text>
        </EducationAccordionItem>
      </Accordion>
    </Section>
  );
}

export default Education;
