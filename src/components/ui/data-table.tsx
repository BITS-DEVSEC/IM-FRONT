"use client";

import * as React from "react";
import {
	type ColumnDef,
	type ColumnFiltersState,
	type SortingState,
	type VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import type { QuotationStatus } from "@/types/quotation";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	toolbarActionsPrefix?: React.ReactNode; // New prop for prefix actions
	// Expose onEditProduct and onDeleteProduct through table options meta
	meta?: {
		onEditProduct?: (id: string) => void;
		onDeleteProduct?: (id: string) => void;
		onViewDetails?: (id: number) => void;
		onStatusChange?: (id: number, newStatus: QuotationStatus) => void;
	};
}

export function DataTable<TData, TValue>({
	columns,
	data,
	toolbarActionsPrefix, // Destructure new prop
	meta,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({}); // Control column visibility
	const [rowSelection, setRowSelection] = React.useState({}); // If you need row selection

	const table = useReactTable({
		data,
		columns,
		meta, // Pass meta to the table instance
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(), // For pagination
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(), // For sorting
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(), // For filtering
		onColumnVisibilityChange: setColumnVisibility, // For column visibility
		onRowSelectionChange: setRowSelection, // For row selection
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div>
			{/* Toolbar: Create Button, Filtering Input, and Column Visibility Dropdown */}
			<div className="flex items-center justify-between py-4">
				<div className="flex items-center gap-2 flex-1">
					<Input
						placeholder="Filter titles..." // Example: filter by coverageType (Title)
						value={
							(table.getColumn("coverageType")?.getFilterValue() as string) ??
							""
						}
						onChange={(event) =>
							table
								.getColumn("coverageType")
								?.setFilterValue(event.target.value)
						}
						className="max-w-sm h-10"
					/>
				</div>
				<div className="flex items-center gap-2">
					{toolbarActionsPrefix && <div>{toolbarActionsPrefix}</div>}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" className="ml-auto">
								Columns <ChevronDown className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{table
								.getAllColumns()
								.filter((column) => column.getCanHide())
								.map((column) => {
									return (
										<DropdownMenuCheckboxItem
											key={column.id}
											className="capitalize"
											checked={column.getIsVisible()}
											onCheckedChange={(value) =>
												column.toggleVisibility(!!value)
											}
										>
											{column.id}
										</DropdownMenuCheckboxItem>
									);
								})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			{/* Table */}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{/* Pagination Controls */}
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
