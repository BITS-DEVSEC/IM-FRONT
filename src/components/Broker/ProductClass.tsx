import { useState } from "react";
import {
  Card,
  Text,
  Image,
  Button,
  Select,
  Grid,
  Input,
  Box,
} from "@mantine/core";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const insuranceTypes = [
  { label: "Motor insurance", value: "motor" },
  { label: "Engineering insurance", value: "engineering" },
  { label: "Property insurance", value: "property" },
  { label: "Liability insurance", value: "liability" },
  { label: "Pecuniary insurance", value: "pecuniary" },
];

const insuranceImages: { [key: string]: string } = {
  motor:
    "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=is&k=20&c=oznwuNIm1nYMO545gPMGyYr2OxwUXlaPh7Y3_6ANELA=",
  engineering:
    "https://media.istockphoto.com/id/807387518/photo/beautiful-view-of-amazing-sandstone-formations-in-famous-lower-antelope-canyon-near-the.jpg?s=612x612&w=0&k=20&c=9SwvauNNVj2Jxu0Qg22DHXFKBCUlx_lXxqCQbQhQ65k=",
  property:
    "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
  liability:
    "https://media.istockphoto.com/id/1149644870/photo/boy-sitting-on-a-bridge-with-his-smartphone-in-his-hand.jpg?s=612x612&w=0&k=20&c=VdbVsUxjmvjNLFmc2sRWgMwneQ7Qjp35uXzkNrxS_v0=",
  pecuniary:
    "https://media.istockphoto.com/id/1066588820/photo/lavender-field-at-sunset-provence-amazing-landscape-with-fiery-sky-france.jpg?s=612x612&w=0&k=20&c=7WjuB6ODzfUxrpWTL1mS2vTmsFCtMdbE2H9X4QA-XkI=",
};

export default function InsuranceCards() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTypes = insuranceTypes.filter((type) =>
    type.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box p="md">
      <Grid gutter="md" justify="space-between">
        <Grid.Col span={6}>
          <Select
            data={insuranceTypes}
            placeholder="Select Product class"
            value={selectedProduct}
            onChange={setSelectedProduct}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={4}>
          {" "}
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
            leftSection={<MagnifyingGlassIcon />}
          />
        </Grid.Col>
      </Grid>

      <Grid mt="md">
        {filteredTypes.map((type) => (
          <Grid.Col span={3} key={type.value}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={
                    insuranceImages[type.value] ||
                    "https://via.placeholder.com/150"
                  }
                  height={120}
                  alt={type.label}
                  style={{ cursor: "pointer" }}
                />
              </Card.Section>

              <Text
                size="sm"
                mt="md"
                style={{ cursor: "pointer", textAlign: "center" }}
              >
                {type.label}
              </Text>

              <Button
                fullWidth
                mt="sm"
                variant={selectedProduct === type.value ? "filled" : "default"}
                onClick={() => setSelectedProduct(type.value)}
              >
                View Details
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
