import { Container, Button, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function ListingFormPage() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        navigate("/insurer/listings");
    };

    return (
        <Container size="lg">
            <Title order={1}>New Listing</Title>
            <form onSubmit={handleSubmit}>
                <TextInput label="Name" placeholder="Listing Name" required mt="md" />
                <TextInput label="Description" placeholder="Listing Description" required mt="md" />
                <Button type="submit" mt="md">Submit</Button>
            </form>
        </Container>
    );
}
