"use client";

import { Badge } from "@/components/ui/badge";
import type { Policy, PolicyStatus } from "@/types/policy";
import type { ColumnDef } from "@tanstack/react-table";

const statusColors: Record<PolicyStatus, string> = {
	active: "bg-green-500",
	expired: "bg-yellow-500",
	cancelled: "bg-red-500",
};

export const columns: ColumnDef<Policy>[] = [
	{
		accessorKey: "policyNumber",
		header: "Policy Number",
	},
	{
		accessorKey: "userPhoneNumber",
		header: "User Phone Number",
	},
	{
		accessorKey: "insuredEntity",
		header: "Insured Entity",
	},
	{
		accessorKey: "coverageType",
		header: "Coverage Type",
	},
	{
		accessorKey: "startDate",
		header: "Start Date",
		cell: ({ row }) => {
			const date = new Date(row.getValue("startDate"));
			return date.toLocaleDateString();
		},
	},
	{
		accessorKey: "endDate",
		header: "End Date",
		cell: ({ row }) => {
			const date = new Date(row.getValue("endDate"));
			return date.toLocaleDateString();
		},
	},
	{
		accessorKey: "premiumAmount",
		header: () => <div className="text-right">Premium Amount</div>,
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("premiumAmount"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return <div className="text-right font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.getValue("status") as PolicyStatus;
			return (
				<Badge className={`${statusColors[status]} text-white`}>
					{status.charAt(0).toUpperCase() + status.slice(1)}
				</Badge>
			);
		},
	},
];
