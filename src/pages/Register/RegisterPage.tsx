import React from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Container,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "../Login/GoogleButton"; // Ensure you import the GoogleButton component

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        radius="md"
        p="xl"
        withBorder
        style={{ maxWidth: 400, width: "100%" }}
      >
        <Text size="lg" fw={500} ta="center">
          Create your account
        </Text>

        {/* Google Register Button */}
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your name"
              required
              radius="md"
            />
            <TextInput
              label="Email"
              placeholder="you@example.com"
              required
              radius="md"
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              radius="md"
            />
            <Checkbox label="I accept terms and conditions" required />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              onClick={() => navigate("/login")}
              size="xs"
            >
              Already have an account? Login
            </Anchor>
            <Button type="submit" radius="xl">
              Register
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
