import { useState } from "react";
import CustomTable, { Column } from "../../components/table/table";
import { Button, Container, Title, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface Listing {
    id: number;
    name: string;
    description: string;
}

const initialListings: Listing[] = [
    { id: 1, name: "Listing 1", description: "Description 1" },
    { id: 2, name: "Listing 2", description: "Description 2" },
];

const columns: Column<Listing>[] = [
    { label: "ID", accessor: "id" },
    { label: "Name", accessor: "name" },
    { label: "Description", accessor: "description" },
    { label: "Action", accessor: "action", render: (row) => <Button>Edit</Button> },
];

export default function ManageListings() {
    const [listings, setListings] = useState(initialListings);
    const navigate = useNavigate();

    const handleSearch = (search: string) => {
        // Implement search functionality if needed
    };

    return (
        <Container>

            <Group align="left" mt="md" justify="space-between">
                <Title order={1}>Product Listings</Title>
                <Button onClick={() => navigate("/insurer/new-listing")}>New Listing</Button>
            </Group>
            <CustomTable
                columns={columns}
                rows={listings}
                title="Listings"
                setSearch={handleSearch}
                searchable
                pageable
            />
        </Container>
    );
}
