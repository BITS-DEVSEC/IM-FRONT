export type PolicyStatus = "active" | "expired" | "cancelled";

export interface Policy {
	policyNumber: string;
	userPhoneNumber: string;
	insuredEntity: string;
	coverageType: string;
	startDate: Date;
	endDate: Date;
	premiumAmount: number;
	status: PolicyStatus;
}

// For filtering
export interface PolicyFilters {
	status?: PolicyStatus;
	coverageType?: string;
	dateRange?: {
		from: Date;
		to: Date;
	};
}
