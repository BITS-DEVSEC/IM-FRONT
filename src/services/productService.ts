import type { Product } from "@/components/admin-components/product-data";

export const mockProducts: Product[] = [
	{
		id: "1",
		insuranceType: "Motor",
		coverageType: "Comprehensive",
		description: "Full coverage for motor vehicles",
		pricing: 1200.5,
	},
	{
		id: "2",
		insuranceType: "Health",
		coverageType: "Individual Basic",
		description: "Basic health coverage for individuals",
		pricing: 300.0,
	},
	{
		id: "3",
		insuranceType: "Life",
		coverageType: "Term Life 20 Years",
		description: "20-year term life insurance policy",
		pricing: 50.0,
	},
];

export const fetchProducts = (): Promise<Product[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockProducts);
		}, 500);
	});
};

export const createProduct = (
	newProductData: Omit<Product, "id">,
): Promise<Product> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const newProduct: Product = {
				...newProductData,
				id:
					Math.random().toString(36).substring(2, 15) +
					Math.random().toString(36).substring(2, 15), // Generate a more unique ID
			};
			mockProducts.push(newProduct);
			resolve(newProduct);
		}, 500);
	});
};

export const updateProduct = (updatedProduct: Product): Promise<Product> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const index = mockProducts.findIndex((p) => p.id === updatedProduct.id);
			if (index !== -1) {
				mockProducts[index] = updatedProduct;
				resolve(updatedProduct);
			} else {
				reject(new Error("Product not found"));
			}
		}, 500);
	});
};

export const deleteProduct = (productId: string): Promise<boolean> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const initialLength = mockProducts.length;
			const newProducts = mockProducts.filter((p) => p.id !== productId);
			if (newProducts.length < initialLength) {
				// In a real app, you'd modify the actual data source, not mockProducts directly
				// For this mock, we'll just reassign to simulate deletion
				mockProducts.splice(0, mockProducts.length, ...newProducts);
				resolve(true);
			} else {
				reject(new Error("Product not found"));
			}
		}, 500);
	});
};
