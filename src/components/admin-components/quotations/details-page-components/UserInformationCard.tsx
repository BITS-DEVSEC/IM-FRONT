import { DescriptionItem } from "@/components/shared/DescriptionItem";
import type { QuotationRequest } from "@/types/quotation";

interface UserInformationCardProps {
	user: QuotationRequest["user"];
}

export function UserInformationCard({ user }: UserInformationCardProps) {
	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
			<h3 className="text-xl font-semibold">User Information</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<DescriptionItem label="Phone Number" value={user.phone_number} />
				<DescriptionItem label="TIN (FIN)" value={user.fin} />
			</div>
		</div>
	);
}
