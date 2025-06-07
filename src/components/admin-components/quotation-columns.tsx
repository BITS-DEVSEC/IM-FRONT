"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { QuotationRequest, QuotationStatus } from "@/types/quotation";
import type { ColumnDef } from "@tanstack/react-table";
import { CheckCircle, Eye, MoreHorizontal, XCircle } from "lucide-react";

const statusColors: Record<QuotationStatus, string> = {
	draft: "bg-gray-500/80 text-gray-800",
	pending: "bg-yellow-500/80 text-yellow-900",
	approved: "bg-green-500/80 text-green-900",
	rejected: "bg-red-500/80 text-red-900",
};

export const columns: ColumnDef<QuotationRequest>[] = [
	{
		accessorKey: "user.phone_number",
		header: "Phone Number",
	},
	{
		accessorKey: "user.fin",
		header: "TIN (FIN)",
	},
	{
		accessorKey: "insurance_type.name",
		header: "Insurance Type",
	},
	{
		accessorKey: "coverage_type.name",
		header: "Coverage Type",
	},
	{
		accessorKey: "vehicle.plate_number",
		header: "Plate Number",
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.getValue("status") as QuotationStatus;
			return (
				<Badge className={`${statusColors[status]}`}>
					{status.charAt(0).toUpperCase() + status.slice(1)}
				</Badge>
			);
		},
	},
	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		cell: ({ row, table }) => {
			const quotation = row.original;
			const { onViewDetails, onStatusChange } = table.options.meta as {
				onViewDetails: (id: number) => void;
				onStatusChange: (id: number, status: QuotationStatus) => void;
			};

			return (
				<div className="text-center">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="h-8 w-8 p-0">
								<span className="sr-only">Open menu</span>
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuItem onClick={() => onViewDetails(quotation.id)}>
								<Eye className="mr-2 h-4 w-4" />
								View Details
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							{quotation.status === "pending" && (
								<>
									<DropdownMenuItem
										onClick={() => onStatusChange(quotation.id, "approved")}
										className="text-green-600"
									>
										<CheckCircle className="mr-2 h-4 w-4" />
										Approve
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => onStatusChange(quotation.id, "rejected")}
										className="text-red-600"
									>
										<XCircle className="mr-2 h-4 w-4" />
										Reject
									</DropdownMenuItem>
								</>
							)}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		},
	},
];
