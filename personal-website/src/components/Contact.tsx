import { Group, Stack, Title } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import LinkIcon from "./LinkIcon";

function Contact() {
  const iconSize = 24;

  return (
    <Stack align="center" justify="center" pt={50}>
      <Title size="2.5rem">Get in Touch!</Title>
      <Group>
        <LinkIcon
          tooltipLabel="Email"
          href="mailto:ingemarsson.lukas@gmail.com"
        >
          <IconMail size={iconSize} />
        </LinkIcon>
        <LinkIcon
          tooltipLabel="LinkedIn"
          href="https://www.linkedin.com/in/lukas-ingemarsson/"
        >
          <IconBrandLinkedin size={iconSize} />
        </LinkIcon>
        <LinkIcon
          tooltipLabel="GitHub"
          href="https://github.com/LukasIngemarsson"
        >
          <IconBrandGithub size={iconSize} />
        </LinkIcon>
      </Group>
    </Stack>
  );
}

export default Contact;
