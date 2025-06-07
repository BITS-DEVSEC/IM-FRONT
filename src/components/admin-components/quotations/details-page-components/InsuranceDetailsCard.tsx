import type { QuotationRequest } from "@/types/quotation";

interface InsuranceDetailsCardProps {
	insuranceType: QuotationRequest["insurance_type"];
	coverageType: QuotationRequest["coverage_type"];
	coverageAmount: QuotationRequest["form_data"]["coverage_amount"];
}

export function InsuranceDetailsCard({
	insuranceType,
	coverageType,
	coverageAmount,
}: InsuranceDetailsCardProps) {
	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
			<h3 className="text-xl font-semibold">Insurance Details</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">Insurance Type</p>
					<p className="font-medium text-lg">{insuranceType.name}</p>
				</div>
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">Coverage Type</p>
					<p className="font-medium text-lg">{coverageType.name}</p>
				</div>
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">Coverage Amount</p>
					<p className="font-medium text-lg">
						{new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "ETB",
						}).format(coverageAmount)}
					</p>
				</div>
			</div>
		</div>
	);
}
