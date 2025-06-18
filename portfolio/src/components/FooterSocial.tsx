import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./FooterSocial.module.css";

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text>{"This is the end of the page. :)"}</Text>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/lukas-ingemarsson/"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/LukasIngemarsson"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
