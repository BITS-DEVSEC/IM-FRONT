import type { Quotation } from "@/types";

interface UserInformationCardProps {
	user: Quotation["user"];
}

export function UserInformationCard({ user }: UserInformationCardProps) {
	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
			<h3 className="text-xl font-semibold">User Information</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">Phone Number</p>
					<p className="font-medium text-lg">{user.phone_number}</p>
				</div>
				<div className="flex flex-col">
					<p className="text-sm text-muted-foreground">TIN (FIN)</p>
					<p className="font-medium text-lg">{user.fin}</p>
				</div>
			</div>
		</div>
	);
}
