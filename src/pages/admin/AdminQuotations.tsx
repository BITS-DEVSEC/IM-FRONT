import { useState, useMemo } from "react";
import { QuotationRequestsTable } from "@/components/admin-components/QuotationRequestsTable";
import { QuotationDetailsDialog } from "@/components/admin-components/QuotationDetailsDialog";
import { QuotationFilterDialog } from "@/components/admin-components/QuotationFilterDialog";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import type {
	QuotationRequest,
	QuotationFilters as QuotationFiltersType,
} from "@/types/quotation";

// Mock data for initial display
const mockQuotations: QuotationRequest[] = [
	{
		id: 1,
		status: "pending",
		form_data: {
			coverage_amount: 5000,
			vehicle_details: {
				vehicle_type: "Sedan",
				vehicle_usage: "Personal",
			},
			current_residence_address: {
				region: "Addis Ababa",
				house_number: "123",
			},
		},
		user: {
			phone_number: "+251912345678",
			fin: "123456789",
		},
		insurance_type: {
			name: "Motor",
		},
		coverage_type: {
			name: "Comprehensive",
		},
		vehicle: {
			plate_number: "ABC123",
			front_view_photo_url: "https://example.com/front.jpg",
			back_view_photo_url: "https://example.com/back.jpg",
		},
	},
	{
		id: 2,
		status: "approved",
		form_data: {
			coverage_amount: 7500,
			vehicle_details: {
				vehicle_type: "SUV",
				vehicle_usage: "Commercial",
			},
			current_residence_address: {
				region: "Oromia",
				house_number: "456",
			},
		},
		user: {
			phone_number: "+251923456789",
			fin: "987654321",
		},
		insurance_type: {
			name: "Motor",
		},
		coverage_type: {
			name: "Third Party",
		},
		vehicle: {
			plate_number: "XYZ789",
			front_view_photo_url: "https://example.com/front-suv.jpg",
			back_view_photo_url: "https://example.com/back-suv.jpg",
		},
	},
	{
		id: 3,
		status: "rejected",
		form_data: {
			coverage_amount: 1000,
			vehicle_details: {
				vehicle_type: "Motorcycle",
				vehicle_usage: "Personal",
			},
			current_residence_address: {
				region: "Amhara",
				house_number: "789",
			},
		},
		user: {
			phone_number: "+251934567890",
			fin: "112233445",
		},
		insurance_type: {
			name: "Motor",
		},
		coverage_type: {
			name: "Comprehensive",
		},
		vehicle: {
			plate_number: "MCL456",
			front_view_photo_url: "https://example.com/front-mc.jpg",
			back_view_photo_url: "https://example.com/back-mc.jpg",
		},
	},
	{
		id: 4,
		status: "draft",
		form_data: {
			coverage_amount: 20000,
			vehicle_details: {
				vehicle_type: "Truck",
				vehicle_usage: "Commercial",
			},
			current_residence_address: {
				region: "Tigray",
				house_number: "101",
			},
		},
		user: {
			phone_number: "+251945678901",
			fin: "667788990",
		},
		insurance_type: {
			name: "Motor",
		},
		coverage_type: {
			name: "Third Party",
		},
		vehicle: {
			plate_number: "TRK777",
			front_view_photo_url: "https://example.com/front-truck.jpg",
			back_view_photo_url: "https://example.com/back-truck.jpg",
		},
	},
];

export default function AdminQuotations() {
	const [quotations, setQuotations] =
		useState<QuotationRequest[]>(mockQuotations);
	const [selectedQuotation, setSelectedQuotation] =
		useState<QuotationRequest | null>(null);
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [filters, setFilters] = useState<QuotationFiltersType>({});

	const handleViewDetails = (quotationId: number) => {
		const quotation = quotations.find((q) => q.id === quotationId);
		if (quotation) {
			setSelectedQuotation(quotation);
			setIsDetailsOpen(true);
		}
	};

	const handleStatusChange = (
		quotationId: number,
		newStatus: QuotationRequest["status"],
	) => {
		setQuotations((prev) =>
			prev.map((q) => (q.id === quotationId ? { ...q, status: newStatus } : q)),
		);
	};

	const filteredQuotations = useMemo(() => {
		return quotations.filter((quotation) => {
			// Status filter
			if (filters.status && quotation.status !== filters.status) {
				return false;
			}

			// Insurance Type filter
			if (
				filters.insuranceType &&
				quotation.insurance_type.name.toLowerCase() !==
					filters.insuranceType.toLowerCase()
			) {
				return false;
			}

			// Coverage Type filter
			if (
				filters.coverageType &&
				quotation.coverage_type.name.toLowerCase() !==
					filters.coverageType.toLowerCase()
			) {
				return false;
			}

			// Date Range filter
			if (filters.dateRange?.from || filters.dateRange?.to) {
				// For simplicity, let's assume we have a creation date on QuotationRequest
				// If not, you'd need to add it or use a proxy like the ID as a timestamp.
				// For now, let's assume `id` can be roughly converted to a date for mock data.
				const quotationDate = new Date(quotation.id); // This is a placeholder, use a real date field

				if (
					filters.dateRange.from &&
					quotationDate < new Date(filters.dateRange.from)
				) {
					return false;
				}
				if (
					filters.dateRange.to &&
					quotationDate > new Date(filters.dateRange.to)
				) {
					return false;
				}
			}

			// Vehicle Type filter
			if (
				filters.vehicleType &&
				!quotation.form_data.vehicle_details.vehicle_type
					.toLowerCase()
					.includes(filters.vehicleType.toLowerCase())
			) {
				return false;
			}

			// Region filter
			if (
				filters.region &&
				!quotation.form_data.current_residence_address.region
					.toLowerCase()
					.includes(filters.region.toLowerCase())
			) {
				return false;
			}
			return true;
		});
	}, [quotations, filters]);

	const handleFilterChange = (newFilters: QuotationFiltersType) => {
		setFilters(newFilters);
		setIsFilterOpen(false);
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Quotation Requests</h1>
			</div>

			<QuotationRequestsTable
				quotations={filteredQuotations}
				onViewDetails={handleViewDetails}
				onStatusChange={handleStatusChange}
				toolbarActionsPrefix={
					<Button
						variant="outline"
						size="default"
						onClick={() => setIsFilterOpen(true)}
					>
						<Filter className="h-4 w-4 mr-2" />
						Filter
					</Button>
				}
			/>

			<QuotationDetailsDialog
				quotation={selectedQuotation}
				isOpen={isDetailsOpen}
				onOpenChange={setIsDetailsOpen}
			/>

			<QuotationFilterDialog
				isOpen={isFilterOpen}
				onOpenChange={setIsFilterOpen}
				onFilterChange={handleFilterChange}
			/>
		</div>
	);
}
