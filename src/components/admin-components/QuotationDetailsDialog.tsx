import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { QuotationRequest } from "@/types/quotation";
import type React from "react";

interface QuotationDetailsDialogProps {
	quotation: QuotationRequest | null;
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

export const QuotationDetailsDialog: React.FC<QuotationDetailsDialogProps> = ({
	quotation,
	isOpen,
	onOpenChange,
}) => {
	if (!quotation) return null;

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Quotation Details</DialogTitle>
				</DialogHeader>

				<div className="space-y-6">
					{/* Status Badge */}
					<div className="flex justify-end">
						<Badge className="text-white bg-primary">
							{quotation.status.charAt(0).toUpperCase() +
								quotation.status.slice(1)}
						</Badge>
					</div>

					{/* User Information */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">User Information</h3>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-sm text-muted-foreground">Phone Number</p>
								<p className="font-medium">{quotation.user.phone_number}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">TIN (FIN)</p>
								<p className="font-medium">{quotation.user.fin}</p>
							</div>
						</div>
					</div>

					<Separator />

					{/* Insurance Details */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Insurance Details</h3>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-sm text-muted-foreground">Insurance Type</p>
								<p className="font-medium">{quotation.insurance_type.name}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">Coverage Type</p>
								<p className="font-medium">{quotation.coverage_type.name}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">Coverage Amount</p>
								<p className="font-medium">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "USD",
									}).format(quotation.form_data.coverage_amount)}
								</p>
							</div>
						</div>
					</div>

					<Separator />

					{/* Vehicle Details */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Vehicle Details</h3>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-sm text-muted-foreground">Plate Number</p>
								<p className="font-medium">{quotation.vehicle.plate_number}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">Vehicle Type</p>
								<p className="font-medium">
									{quotation.form_data.vehicle_details.vehicle_type}
								</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">Vehicle Usage</p>
								<p className="font-medium">
									{quotation.form_data.vehicle_details.vehicle_usage}
								</p>
							</div>
						</div>

						{/* Vehicle Images */}
						<div className="grid grid-cols-2 gap-4 mt-4">
							{quotation.vehicle.front_view_photo_url && (
								<div>
									<p className="text-sm text-muted-foreground mb-2">
										Front View
									</p>
									<a
										href="/front.png"
										target="_blank"
										rel="noopener noreferrer"
										className="block"
									>
										<img
											src="/front.png"
											alt="Front view"
											className="w-full h-48 object-cover rounded-lg"
										/>
									</a>
								</div>
							)}
							{quotation.vehicle.back_view_photo_url && (
								<div>
									<p className="text-sm text-muted-foreground mb-2">
										Back View
									</p>
									<a
										href="/back.png"
										target="_blank"
										rel="noopener noreferrer"
										className="block"
									>
										<img
											src="/back.png"
											alt="Back view"
											className="w-full h-48 object-cover rounded-lg"
										/>
									</a>
								</div>
							)}
						</div>
					</div>

					<Separator />

					{/* Address Information */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Address Information</h3>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-sm text-muted-foreground">Region</p>
								<p className="font-medium">
									{quotation.form_data.current_residence_address.region}
								</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">House Number</p>
								<p className="font-medium">
									{quotation.form_data.current_residence_address.house_number}
								</p>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
