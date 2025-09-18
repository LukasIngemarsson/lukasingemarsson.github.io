import { Text, Box } from "@mantine/core";

function Footer() {
  return (
    <Box
      mt={120}
      style={{
        borderTop:
          "1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))",
      }}
    >
      <Text ta="center" pt="xl" pb="xl">
        &copy; 2025 Lukas Ingemarsson
      </Text>
    </Box>
  );
}

export default Footer;
