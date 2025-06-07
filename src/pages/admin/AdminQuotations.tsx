import { QuotationFilterDialog } from "@/components/admin-components/quotations/QuotationFilterDialog.tsx";
import { QuotationRequestsTable } from "@/components/admin-components/quotations/QuotationRequestsTable.tsx";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import {
	fetchQuotations,
	updateQuotationStatus,
} from "@/services/quotationService";
import type {
	QuotationFilters as QuotationFiltersType,
	QuotationRequest,
} from "@/types/quotation";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminQuotations() {
	const [quotations, setQuotations] = useState<QuotationRequest[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
	const [currentFilters, setCurrentFilters] = useState<QuotationFiltersType>(
		{},
	);

	useEffect(() => {
		const getQuotations = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const fetchedQuotations = await fetchQuotations();
				setQuotations(fetchedQuotations);
			} catch (err) {
				setError(err as Error);
			} finally {
				setIsLoading(false);
			}
		};
		getQuotations();
	}, []);

	const applyFilters = (data: QuotationFiltersType) => {
		setCurrentFilters(data);
		// In a real app, you'd re-fetch data from the API with these filters
		console.log("Applying filters:", data);

		const filtered = quotations.filter((quotation) => {
			let matches = true;

			if (
				data.status &&
				quotation.status.toLowerCase() !== data.status.toLowerCase()
			) {
				matches = false;
			}
			if (
				data.insuranceType &&
				quotation.insurance_type.name.toLowerCase() !==
					data.insuranceType.toLowerCase()
			) {
				matches = false;
			}
			if (
				data.coverageType &&
				quotation.coverage_type.name.toLowerCase() !==
					data.coverageType.toLowerCase()
			) {
				matches = false;
			}
			if (data.dateRange?.from && quotation.id) {
				// For date range, we'll use a simple mock based on ID for demonstration
				// In a real app, you'd compare actual dates from quotation objects
				const quotationDate = new Date(2024, 0, quotation.id); // Mock date for example
				if (quotationDate < data.dateRange.from) {
					matches = false;
				}
			}
			if (data.dateRange?.to && quotation.id) {
				const quotationDate = new Date(2024, 0, quotation.id); // Mock date for example
				if (quotationDate > data.dateRange.to) {
					matches = false;
				}
			}
			if (
				data.vehicleType &&
				!quotation.form_data.vehicle_details.vehicle_type
					.toLowerCase()
					.includes(data.vehicleType.toLowerCase())
			) {
				matches = false;
			}
			if (
				data.region &&
				!quotation.form_data.current_residence_address.region
					.toLowerCase()
					.includes(data.region.toLowerCase())
			) {
				matches = false;
			}

			return matches;
		});
		setQuotations(filtered);
		setIsFilterDialogOpen(false);
	};

	const handleViewDetails = (quotationId: number) => {
		// Navigate to quotation details page
		console.log("Viewing details for quotation:", quotationId);
		window.location.href = `/admin/quotations/${quotationId}`;
	};

	const handleStatusChange = async (
		quotationId: number,
		newStatus: QuotationRequest["status"],
	) => {
		try {
			const updated = await updateQuotationStatus(quotationId, newStatus);
			if (updated) {
				setQuotations((prev) =>
					prev.map((q) => (q.id === quotationId ? updated : q)),
				);
				console.log(`Quotation ${quotationId} status updated to ${newStatus}`);
			}
		} catch (err) {
			console.error("Failed to update quotation status:", err);
		}
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-full min-h-[calc(100vh-80px)] text-red-500">
				<p className="text-lg font-medium">Error: {error.message}</p>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-start">
				<div>
					<h1 className="text-2xl font-bold">Quotation Requests</h1>
					<p className="text-muted-foreground text-sm">
						View and manage all incoming insurance quotation requests.
					</p>
				</div>
			</div>

			<QuotationRequestsTable
				quotations={quotations}
				onViewDetails={handleViewDetails}
				onStatusChange={handleStatusChange}
				toolbarActionsPrefix={
					<Button onClick={() => setIsFilterDialogOpen(true)} variant="outline">
						<Filter className="mr-2 h-4 w-4" /> Filter
					</Button>
				}
			/>

			<QuotationFilterDialog
				isOpen={isFilterDialogOpen}
				onOpenChange={setIsFilterDialogOpen}
				onApplyFilters={applyFilters}
				currentFilters={currentFilters}
			/>
		</div>
	);
}
