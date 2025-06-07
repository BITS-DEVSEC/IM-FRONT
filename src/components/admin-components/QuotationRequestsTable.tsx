import type { FC } from "react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./quotation-columns";
import type { QuotationRequest } from "@/types/quotation";

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
