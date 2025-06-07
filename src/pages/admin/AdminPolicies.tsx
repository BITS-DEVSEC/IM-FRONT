import { useState } from "react";
import { PoliciesTable } from "@/components/admin-components/PoliciesTable";
import type { Policy } from "@/types/policy";

// Mock data for initial display
const mockPolicies: Policy[] = [
	{
		policyNumber: "POL-001",
		userPhoneNumber: "+1234567890",
		insuredEntity: "John Doe",
		coverageType: "Comprehensive",
		startDate: new Date("2024-01-01"),
		endDate: new Date("2025-01-01"),
		premiumAmount: 1200,
		status: "active",
	},
	{
		policyNumber: "POL-002",
		userPhoneNumber: "+1987654321",
		insuredEntity: "Jane Smith",
		coverageType: "Third Party",
		startDate: new Date("2023-12-01"),
		endDate: new Date("2024-12-01"),
		premiumAmount: 800,
		status: "active",
	},
	// Add more mock data as needed
];

export default function AdminPolicies() {
	const [policies, setPolicies] = useState<Policy[]>(mockPolicies);

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Insurance Policies</h1>
			</div>

			<PoliciesTable policies={policies} />
		</div>
	);
}
