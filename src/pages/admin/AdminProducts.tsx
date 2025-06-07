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
import { EditProductDialog } from "@/components/admin-components/EditProductDialog";

const AdminProducts: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
	const [selectedProductForEdit, setSelectedProductForEdit] =
		useState<Product | null>(null);

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
		const createdProduct = await createProduct(newProduct);
		setProducts((prevProducts) => [...prevProducts, createdProduct]);
		console.log("Creating product:", createdProduct);
	};

	const handleEditProduct = (productId: string) => {
		const productToEdit = products.find((p) => p.id === productId);
		if (productToEdit) {
			setSelectedProductForEdit(productToEdit);
			setIsEditDialogOpen(true);
		}
	};

	const handleProductUpdate = async (updatedProduct: Product) => {
		try {
			const result = await updateProduct(updatedProduct);
			setProducts((prevProducts) =>
				prevProducts.map((p) => (p.id === result.id ? result : p)),
			);
			console.log("Updating product:", result);
		} catch (err) {
			console.error("Failed to update product:", err);
		}
	};

	const handleDeleteProduct = async (productId: string) => {
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
			</div>

			<ProductsTable
				products={products}
				onEditProduct={handleEditProduct}
				onDeleteProduct={handleDeleteProduct}
				toolbarActionsPrefix={
					<CreateProductDialog
						isOpen={isCreateDialogOpen}
						onOpenChange={setIsCreateDialogOpen}
						onProductCreate={handleCreateProduct}
					/>
				}
			/>

			<EditProductDialog
				isOpen={isEditDialogOpen}
				onOpenChange={setIsEditDialogOpen}
				onProductUpdate={handleProductUpdate}
				product={selectedProductForEdit}
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
