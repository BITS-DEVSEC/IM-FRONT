import type { QuotationRequest } from "@/types/quotation";

interface AddressInformationCardProps {
	address: QuotationRequest["form_data"]["current_residence_address"];
}

export function AddressInformationCard({
	address,
}: AddressInformationCardProps) {
	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
			<h3 className="text-xl font-semibold">Address Information</h3>
			<div className="grid gap-2">
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">Region</p>
					<p className="font-medium text-lg">{address.region}</p>
				</div>
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">House Number</p>
					<p className="font-medium text-lg">{address.house_number}</p>
				</div>
			</div>
		</div>
	);
}
