import { CreateProductDialog } from "@/components/admin-components/CreateProductDialog";
import { ProductsTable } from "@/components/admin-components/ProductsTable";
import type { Product } from "@/components/admin-components/product-data";
import type React from "react";
import { useState, useEffect } from "react";
import {
	fetchProducts,
	createProduct,
	updateProduct,
	deleteProduct,
} from "@/services/productService";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const AdminProducts: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

	useEffect(() => {
		const getProducts = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const fetchedProducts = await fetchProducts();
				setProducts(fetchedProducts);
			} catch (err) {
				setError(err as Error);
			} finally {
				setIsLoading(false);
			}
		};
		getProducts();
	}, []);

	const handleCreateProduct = async (newProduct: Product) => {
		// Simulate API call to persist the product
		const createdProduct = await createProduct(newProduct);
		setProducts((prevProducts) => [...prevProducts, createdProduct]);
		console.log("Creating product:", createdProduct);
	};

	const handleEditProduct = async (productId: string) => {
		// In a real application, you'd fetch the product by ID and populate a form for editing.
		// For this simulation, we'll just log and assume an update mechanism exists.
		console.log("Editing product:", productId);
		// Example of how you might update a product after fetching it:
		// const productToEdit = products.find(p => p.id === productId);
		// if (productToEdit) {
		//   const updated = await updateProduct({ ...productToEdit, pricing: productToEdit.pricing + 10 });
		//   setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
		// }
	};

	const handleDeleteProduct = async (productId: string) => {
		// Simulate API call for deletion
		const success = await deleteProduct(productId);
		if (success) {
			setProducts((prevProducts) =>
				prevProducts.filter((p) => p.id !== productId),
			);
			console.log("Deleting product:", productId);
		}
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-full min-h-[calc(100vh-80px)] text-red-500">
				<p className="text-lg font-medium">Error: {error.message}</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-3xl font-bold">Manage Products</h1>
				{/* CreateProductDialog will now be rendered inside the DataTable's toolbar */}
			</div>

			<ProductsTable
				products={products}
				onEditProduct={handleEditProduct}
				onDeleteProduct={handleDeleteProduct}
				toolbarActionsPrefix={
					// Pass the CreateProductDialog here
					<CreateProductDialog
						isOpen={isCreateDialogOpen}
						onOpenChange={setIsCreateDialogOpen}
						onProductCreate={handleCreateProduct}
					/>
				}
			/>

			{products.length === 0 && (
				<p className="text-center text-gray-500 mt-4">
					No products found. Click "Create Product" to add one.
				</p>
			)}
		</div>
	);
};

export default AdminProducts;
