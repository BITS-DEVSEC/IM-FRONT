import type { FC } from "react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./policy-columns";
import type { Policy } from "@/types/policy";

interface PoliciesTableProps {
	policies: Policy[];
	toolbarActionsPrefix?: React.ReactNode;
}

export const PoliciesTable: FC<PoliciesTableProps> = ({
	policies,
	toolbarActionsPrefix,
}) => {
	return (
		<DataTable
			columns={columns}
			data={policies}
			toolbarActionsPrefix={toolbarActionsPrefix}
		/>
	);
};
