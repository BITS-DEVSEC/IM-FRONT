import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => (
	<div className="flex flex-col justify-center items-center h-full min-h-[calc(100vh-80px)] space-y-4">
		<Loader2 className="h-12 w-12 animate-spin text-primary" />
		<p className="text-lg font-medium text-muted-foreground">Loading data...</p>
	</div>
);
