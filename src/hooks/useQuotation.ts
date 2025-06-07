import { useState, useEffect } from "react";
import type { QuotationRequest } from "@/types/quotation";
import { fetchQuotationById } from "@/services/quotationService";

export function useQuotation(id: string | undefined) {
	const [quotation, setQuotation] = useState<QuotationRequest | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!id) {
			setIsLoading(false);
			return;
		}

		const getQuotation = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const foundQuotation = await fetchQuotationById(Number.parseInt(id));
				if (foundQuotation) {
					setQuotation(foundQuotation);
				} else {
					setError(new Error("Quotation not found"));
				}
			} catch (err) {
				setError(err as Error);
			} finally {
				setIsLoading(false);
			}
		};

		getQuotation();
	}, [id]);

	return { quotation, isLoading, error };
}
