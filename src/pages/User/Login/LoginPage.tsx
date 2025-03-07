import React from "react";
import {
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { GoogleButton } from "./GoogleButton"; // Ensure you import the GoogleButton component

const LoginPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        radius="md"
        p="xl"
        withBorder
        style={{ maxWidth: 400, width: "100%" }}
      >
        <Text size="lg" fw={500} ta="center">
          Welcome Back! Login
        </Text>

        {/* Google Login Button */}
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form>
          <Stack>
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
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" size="xs">
              Don't have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </Anchor>
            <Button type="submit" radius="xl">
              Login
            </Button>
          </Group>
        </form>

        {/* Forgot Password Link */}
        <Group align="center" justify="center" mt="md">
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <Anchor size="xs" color="dimmed">
              Forgot password?
            </Anchor>
          </Link>
        </Group>
      </Paper>
    </div>
  );
};

export default LoginPage;
