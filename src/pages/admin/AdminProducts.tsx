import type React from 'react';
import { useState } from 'react';
import { CreateProductDialog } from '@/components/admin-components/CreateProductDialog';
import { ProductsTable } from '@/components/admin-components/ProductsTable';
import { type Product, mockProducts } from '@/components/admin-components/product-data';

const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleCreateProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    // TODO: Add API call to persist the product
    console.log('Creating product:', newProduct);
  };

  const handleEditProduct = (productId: string) => {
    // TODO: Implement product edit logic (populate form, API call)
    console.log('Editing product:', productId);
    // Example: Find product, populate form fields, open dialog for editing
    // You might want to open a dialog pre-filled with the product's data.
  };

  const handleDeleteProduct = (productId: string) => {
    // TODO: Implement product delete logic (confirmation, API call)
    console.log('Deleting product:', productId);
    // Example: Add confirmation dialog before deleting
    setProducts((prevProducts) => prevProducts.filter(p => p.id !== productId));
  };

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
        toolbarActionsPrefix={ // Pass the CreateProductDialog here
          <CreateProductDialog
            isOpen={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
            onProductCreate={handleCreateProduct}
          />
        }
      />

      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No products found. Click "Create Product" to add one.</p>
      )}
    </div>
  );
};

export default AdminProducts;
