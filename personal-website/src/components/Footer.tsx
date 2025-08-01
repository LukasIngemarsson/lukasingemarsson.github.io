import { Container, Group, Text, Box, Flex } from "@mantine/core";
import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";

function Footer() {
  return (
    <Box
      mt={120}
      style={{
        borderTop:
          "1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))",
      }}
    >
      <Container>
        <Flex
          justify="space-between"
          align="center"
          pt="xl"
          pb="xl"
          direction={{ base: "column", xs: "row" }}
        >
          <Text>&copy; 2025 Lukas Ingemarsson</Text>
          <Group
            gap={0}
            justify="flex-end"
            wrap="nowrap"
            mt={{ base: "md", xs: 0 }}
          >
            <LinkedInIcon variant="subtle" />
            <GitHubIcon variant="subtle" />
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
