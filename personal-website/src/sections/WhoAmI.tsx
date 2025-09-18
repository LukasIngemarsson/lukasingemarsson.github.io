import { Stack, Title, List } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

import { WHOAMI_DATA } from "../data/whoami.data";

function WhoAmI() {
  return (
    <Stack>
      <Title order={1}>Who Am I?</Title>
      <List icon={<IconChevronRight size={12} />} size="lg">
        {WHOAMI_DATA.map((text, index) => (
          <List.Item key={index}>{text}</List.Item>
        ))}
      </List>
    </Stack>
  );
}

export default WhoAmI;
