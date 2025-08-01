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
      <List icon={<IconChevronRight size={12} />} size="lg">
        <List.Item>
          I am a {calculateMyAge()}-year-old student (class of 2026) currently
          based in Linköping and Stockholm, Sweden.
        </List.Item>
        <List.Item>
          Born in Connecticut, USA, but raised in Sweden from the age of six.
        </List.Item>
        <List.Item>
          Interested in most CS-related topics, but especially passionate about
          AI and machine learning.
        </List.Item>
        <List.Item>
          Greatly enjoy learning new things, challenging myself, and
          collaborating with others to achieve meaningful goals.
        </List.Item>
        <List.Item>
          Also a big sports enthusiast – particularly a fan ice hockey, tennis,
          and the lesser-known winter sport of bandy.
        </List.Item>
      </List>
    </Stack>
  );
}

export default WhoAmI;
