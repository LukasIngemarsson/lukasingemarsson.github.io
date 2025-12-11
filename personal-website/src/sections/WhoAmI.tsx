import { List } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

import Section from "../components/Section";
import { WHOAMI_DATA } from "../data/whoami.data";

function WhoAmI() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Section title="Who Am I?">
      <List icon={<IconChevronRight size={12} />} size={isMobile ? "md" : "lg"} style={{ textWrap: "pretty" }}>
        {WHOAMI_DATA.map((text, index) => (
          <List.Item key={index}>{text}</List.Item>
        ))}
      </List>
    </Section>
  );
}

export default WhoAmI;
