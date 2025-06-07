import { AddressInformationCard } from "@/components/admin-components/quotations/details-page-components/AddressInformationCard";
import { InsuranceDetailsCard } from "@/components/admin-components/quotations/details-page-components/InsuranceDetailsCard";
import { UserInformationCard } from "@/components/admin-components/quotations/details-page-components/UserInformationCard";
import { VehicleDetailsCard } from "@/components/admin-components/quotations/details-page-components/VehicleDetailsCard";
import { VehicleImages } from "@/components/admin-components/quotations/details-page-components/VehicleImages";
import { DetailSection } from "@/components/admin-components/quotations/details-page-components/DetailSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useQuotation } from "@/hooks/useQuotation";
import { ChevronLeft } from "lucide-react";
import { useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function QuotationDetailsPage() {
	const { id } = useParams<{ id: string }>();
	const { quotation, isLoading, error } = useQuotation(id);
	const [isPending] = useTransition();
	const navigate = useNavigate();

	console.log("Front View URL:", quotation?.vehicle.front_view_photo_url);
	console.log("Back View URL:", quotation?.vehicle.back_view_photo_url);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return (
			<div className="p-4 text-center text-red-500">Error: {error.message}</div>
		);
	}

	if (!quotation) {
		return <div className="p-4 text-center">Quotation not found.</div>;
	}

	return (
		<div
			className={`container mx-auto py-6 space-y-8 ${isPending ? "opacity-50 transition-opacity duration-300" : ""}`}
		>
			<div className="flex items-center gap-4">
				<Button
					variant="outline"
					size="icon"
					onClick={() => navigate(-1)}
					className="shrink-0"
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
					Quotation Details{" "}
					<span className="text-muted-foreground">#{quotation.id}</span>
				</h1>
				<div className="ml-auto">
					<Badge
						variant={
							`status-${quotation.status}` as
								| "status-draft"
								| "status-pending"
								| "status-approved"
								| "status-rejected"
						}
					>
						{quotation.status.charAt(0).toUpperCase() +
							quotation.status.slice(1)}
					</Badge>
				</div>
			</div>

			<DetailSection title="Vehicle Images">
				<VehicleImages
					frontViewPhotoUrl={quotation.vehicle.front_view_photo_url}
					backViewPhotoUrl={quotation.vehicle.back_view_photo_url}
				/>
			</DetailSection>

			<div className="grid gap-8 lg:grid-cols-3">
				{/* Main Content Column (wider) */}
				<div className="lg:col-span-2 space-y-8">
					<DetailSection title="User & Insurance Details">
						{/* User Information Card */}
						<UserInformationCard user={quotation.user} />

						{/* Insurance Details Card */}
						<InsuranceDetailsCard
							insuranceType={quotation.insurance_type}
							coverageType={quotation.coverage_type}
							coverageAmount={quotation.form_data.coverage_amount}
						/>
					</DetailSection>
				</div>

				{/* Sidebar Column (narrower) */}
				<div className="lg:col-span-1 space-y-8">
					<DetailSection title="Vehicle & Address Details">
						{/* Vehicle Details Card */}
						<VehicleDetailsCard
							vehicle={quotation.vehicle}
							formData={quotation.form_data}
						/>

						{/* Address Information Card */}
						<AddressInformationCard
							address={quotation.form_data.current_residence_address}
						/>
					</DetailSection>
				</div>
			</div>
		</div>
	);
}
