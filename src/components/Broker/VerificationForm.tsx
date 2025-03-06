import { useState } from "react";
import {
  TextInput,
  Button,
  Group,
  Container,
  Title,
  Center,
  Text,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";

export default function VerificationForm() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Center style={{ height: "100vh" }}>
      <Container
        size="sm"
        p="lg"
        style={{ background: "#f5f5f5", borderRadius: 10 }}
      >
        <Text ta="center" fz="h3" fw={700} mb="md" color="#7E4005">
          Verification Needed
        </Text>

        <Group grow>
          <TextInput
            label="Proposer First Name"
            placeholder="Proposer First Name"
            required
          />
          <TextInput
            color="#7E4005"
            label="Proposer Middle Name"
            placeholder="Proposer Middle Name"
            required
          />
          <TextInput
            label="Proposer Last Name"
            placeholder="Proposer Last Name"
            required
          />
          <TextInput
            label="Date Of Birth"
            placeholder="Date of Birth"
            required
          />
        </Group>

        <Group grow>
          <TextInput label="Phone Number" placeholder="Phone number" required />
          <TextInput label="FIN" placeholder="FIN" required />
          <TextInput label="Email" placeholder="Email" required />
        </Group>

        <Title order={6} mt="md">
          National ID Card/Passport/Driver’s License
        </Title>

        <div
          style={{
            border: "2px dashed #ccc",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "8px",
          }}
        >
          <Dropzone
            onDrop={(files) => setFile(files[0])}
            onReject={() => setFile(null)}
            maxSize={5 * 1024 ** 2} // 5MB limit
          >
            {file ? (
              <Text ta="center">{file.name}</Text>
            ) : (
              <Center style={{ minHeight: 100, flexDirection: "column" }}>
                <Text>Drag and drop or click to select files</Text>
              </Center>
            )}
          </Dropzone>
        </div>

        <Center>
          <Button fullWidth mt="lg" color="#7E4005">
            Submit
          </Button>
        </Center>
      </Container>
    </Center>
  );
}
