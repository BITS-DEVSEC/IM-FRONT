import { Card, Group, Table, Pagination, Text } from "@mantine/core";
import { ContainedInputs } from "../inputs/text";
import { useState, useEffect } from "react";

export type Column<T> = {
  label: string;
  accessor: keyof T | "action";
  render?: (row: T) => React.ReactNode;
};

interface CustomTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  title?: string;
  add?: React.ReactNode;
  setSearch?: (search: string) => void;
  searchable?: boolean;
  pageable?: boolean;
}

export default function CustomTable<T>({
  columns,
  rows,
  add,
  title,
  setSearch,
  searchable,
  pageable,
}: CustomTableProps<T>) {
  const [page, setPage] = useState(1);
  const [paginatedRows, setPaginatedRows] = useState(rows);

  useEffect(() => {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    setPaginatedRows(rows.slice(startIndex, endIndex));
  }, [page, rows]);
  const tableRows = paginatedRows.map((row, index) => {
    return (
      <Table.Tr key={index}>
        {columns.map((col) => {
          return (
            <Table.Td py="xs" key={index}>
              {col.render
                ? col.render(row)
                : (row[col.accessor as keyof T] as React.ReactNode)}
            </Table.Td>
          );
        })}
      </Table.Tr>
    );
  });

  return (
    <div>
      <Table.ScrollContainer mb="xl" minWidth={300}>
        {searchable && (
          <Card p="xs" px={0} radius={0} mb="sm">
            <Group grow>
              <ContainedInputs
                setValue={setSearch}
                label={`Search ${title}`}
                placeholder={`${title} ...`}
              />
              <Group justify="flex-end">{add}</Group>
            </Group>
          </Card>
        )}
        <Table withColumnBorders withRowBorders withTableBorder>
          <Table.Thead>
            <Table.Tr
              style={{
                backgroundColor: "var(--mantine-color-primary-9)",
                color: "white",
              }}
            >
              {columns.map((col) => (
                <Table.Th
                  style={{ fontWeight: 400 }}
                  py="xs"
                  key={col.accessor as string}
                >
                  {col.label}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          {rows.length > 0 ? (
            <Table.Tbody>{tableRows}</Table.Tbody>
          ) : (
            <Table.Tbody>
              <Table.Tr>
                <Table.Td
                  colSpan={columns.length}
                  style={{ textAlign: "center" }}
                >
                  <Text c="dimmed" size="sm" fw={700}>
                    No {title} found!
                  </Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          )}
        </Table>
        {pageable && (
          <Card radius={0} withBorder mt="xs">
            <Group justify="space-between">
              <Text c="dimmed" size="sm" fw={700}>
                Page: {page}
              </Text>
              <Pagination
                size="sm"
                total={Math.ceil(rows.length / 10)}
                value={page}
                onChange={setPage}
              />
            </Group>
          </Card>
        )}
      </Table.ScrollContainer>
    </div>
  );
}
