import { Stack, Title, List } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const calculateMyAge = () => {
  const today = new Date();
  const myBirthday = new Date("2002-06-03");

  let age = today.getFullYear() - myBirthday.getFullYear();
  const monthDiff = today.getMonth() - myBirthday.getMonth();
  const dayDiff = today.getDate() - myBirthday.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) --age;

  return age;
};

function WhoAmI() {
  return (
    <Stack>
      <Title order={1}>Who Am I?</Title>
      <List icon={<IconChevronRight size={12} />} size="xl">
        <List.Item>
          A {calculateMyAge()}-year old student (class of 2026) based in
          Linköping and Stockholm, Sweden.
        </List.Item>
        <List.Item>
          Born in Connecticut, USA, but have spent the majority of my life in
          Sweden (moved at 6 y/o).
        </List.Item>
        <List.Item>
          Interested in most CS-related topics, especially AI and machine
          learning.
        </List.Item>
        <List.Item>
          Greatly enjoy learning new things, challenging myself, and working
          with others to achieve set goals.
        </List.Item>
      </List>
    </Stack>
  );
}

export default WhoAmI;
