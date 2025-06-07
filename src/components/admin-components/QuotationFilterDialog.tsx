import type React from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { QuotationFilters } from "./QuotationFilters";
import type { QuotationFilters as QuotationFiltersType } from "@/types/quotation";

interface QuotationFilterDialogProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	onFilterChange: (filters: QuotationFiltersType) => void;
}

export const QuotationFilterDialog: React.FC<QuotationFilterDialogProps> = ({
	isOpen,
	onOpenChange,
	onFilterChange,
}) => {
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Filter Quotations</DialogTitle>
				</DialogHeader>
				<QuotationFilters onFilterChange={onFilterChange} />
			</DialogContent>
		</Dialog>
	);
};
