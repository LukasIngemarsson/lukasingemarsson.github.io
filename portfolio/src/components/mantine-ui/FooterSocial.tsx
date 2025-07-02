import { Container, Group, Text } from "@mantine/core";
import classes from "./FooterSocial.module.css";
import LinkedInIcon from "../LinkedInIcon";
import GitHubIcon from "../GitHubIcon";

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text>Lukas Ingemarsson</Text>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <LinkedInIcon />
          <GitHubIcon />
        </Group>
      </Container>
    </div>
  );
}
