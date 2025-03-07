import { IconArrowLeft } from "@tabler/icons-react";
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import classes from "./ForgotPassword.module.css";

export function ForgotPassword() {
  return (
    <Center style={{ height: '100vh' }}> {/* Center the content vertically */}
      <Container size={460} my={30}>
        <Title className={classes.title} ta="center">
          Forgot your password?
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter your email to get a reset link
        </Text>

        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput label="Your email" placeholder="me@mantine.dev" required />
          <Group justify="space-between" mt="lg" className={classes.controls}>
            {/* Using Link component for navigation */}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Anchor c="dimmed" size="sm" className={classes.control}>
                <Center inline>
                  <IconArrowLeft size={12} stroke={1.5} />
                  <Box ml={5}>Back to the login page</Box>
                </Center>
              </Anchor>
            </Link>
            <Button className={classes.control}>Reset password</Button>
          </Group>
        </Paper>
      </Container>
    </Center>
  );
}

export default ForgotPassword;