import type { Quotation } from "@/types";

interface VehicleDetailsCardProps {
	vehicle: Quotation["vehicle"];
	formData: Quotation["form_data"];
}

export function VehicleDetailsCard({
	vehicle,
	formData,
}: VehicleDetailsCardProps) {
	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
			<h3 className="text-xl font-semibold">Vehicle Details</h3>
			<div className="grid gap-2">
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">Plate Number</p>
					<p className="font-medium text-lg">{vehicle.plate_number}</p>
				</div>
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">Vehicle Type</p>
					<p className="font-medium text-lg">
						{formData.vehicle_details.vehicle_type}
					</p>
				</div>
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">Vehicle Usage</p>
					<p className="font-medium text-lg">
						{formData.vehicle_details.vehicle_usage}
					</p>
				</div>
			</div>
		</div>
	);
}
