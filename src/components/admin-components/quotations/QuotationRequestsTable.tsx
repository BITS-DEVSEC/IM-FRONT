import { DataTable } from "@/components/ui/data-table";
import type { QuotationRequest } from "@/types/quotation";
import type { FC } from "react";
import { columns } from "./quotation-columns.tsx";

interface QuotationRequestsTableProps {
	quotations: QuotationRequest[];
	onViewDetails: (quotationId: number) => void;
	onStatusChange: (
		quotationId: number,
		newStatus: QuotationRequest["status"],
	) => void;
	toolbarActionsPrefix?: React.ReactNode;
}

export const QuotationRequestsTable: FC<QuotationRequestsTableProps> = ({
	quotations,
	onViewDetails,
	onStatusChange,
	toolbarActionsPrefix,
}) => {
	return (
		<DataTable
			columns={columns}
			data={quotations}
			toolbarActionsPrefix={toolbarActionsPrefix}
			meta={{
				onViewDetails,
				onStatusChange,
			}}
		/>
	);
};
