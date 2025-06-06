export const VALID_ROLES = ["admin", "customer", "insurer"] as const;
export type ValidRole = (typeof VALID_ROLES)[number];
