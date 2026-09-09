const products = [
{
id: 1,
name: "Wireless Headphones",
category: "Electronics",
price: 99.99,
stock: 25,
},
{
id: 2,
name: "Smart Watch",
category: "Wearables",
price: 149.99,
stock: 8,
},
{
id: 3,
name: "Gaming Keyboard",
category: "Gaming",
price: 79.99,
stock: 0,
},
{
id: 4,
name: "Laptop Backpack",
category: "Accessories",
price: 49.99,
stock: 32,
},
{
id: 5,
name: "Bluetooth Speaker",
category: "Electronics",
price: 59.99,
stock: 6,
},
{
id: 6,
name: "Wireless Mouse",
category: "Accessories",
price: 29.99,
stock: 45,
},
{
id: 7,
name: "Gaming Headset",
category: "Gaming",
price: 89.99,
stock: 14,
},
{
id: 8,
name: "USB-C Hub",
category: "Accessories",
price: 39.99,
stock: 3,
},
];

const ProductTable = () => {
const handleEdit = (id) => {
console.log("Edit product:", id);
};

const handleDelete = (id) => {
console.log("Delete product:", id);
};

const getStockStatus = (stock) => {
if (stock === 0) {
return {
label: "Out of stock",
className: "bg-red-50 text-red-600",
};
}


if (stock <= 10) {
  return {
    label: "Low stock",
    className: "bg-yellow-50 text-yellow-600",
  };
}

return {
  label: "In stock",
  className: "bg-green-50 text-green-600",
};


};

return ( <div className="w-full">
{/* Table Header */} <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"> <div> <h2 className="text-xl font-bold text-gray-900">
Product Inventory </h2> <p className="mt-1 text-sm text-gray-500">
Manage your products and stock levels. </p> </div>


    <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
      {products.length} Products
    </div>
  </div>

  {/* Desktop / Tablet Table */}
  <div className="hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:block">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
              Product
            </th>

            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
              Category
            </th>

            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
              Price
            </th>

            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
              Stock
            </th>

            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
              Status
            </th>

            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {products.map((product) => {
            const status = getStockStatus(product.stock);

            return (
              <tr
                key={product.id}
                className="group transition-colors duration-200 hover:bg-gray-50"
              >
                {/* Product */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8l-9-5-9 5m18 0l-9 5m9-5v8l-9 5m-9-13l9 5m-9-5v8l9 5m0-8v8"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-semibold text-gray-900">
                        {product.name}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-400">
                        ID: #{product.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                    {product.category}
                  </span>
                </td>

                {/* Price */}
                <td className="px-6 py-4">
                  <span className="font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </td>

                {/* Stock */}
                <td className="px-6 py-4">
                  <span
                    className={`font-medium ${
                      product.stock === 0
                        ? "text-red-600"
                        : product.stock <= 10
                        ? "text-yellow-600"
                        : "text-gray-700"
                    }`}
                  >
                    {product.stock} units
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
                  >
                    {status.label}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(product.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      title="Edit product"
                      aria-label={`Edit ${product.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 3.487a2.25 2.25 0 113.182 3.182L8.25 18.464 4 19.5l1.036-4.25L16.862 3.487z"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(product.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      title="Delete product"
                      aria-label={`Delete ${product.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 7h12m-9 4v6m6-6v6M9 7V4h6v3m2 0l-.75 13H7.75L7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>

  {/* Mobile Cards */}
  <div className="space-y-4 md:hidden">
    {products.map((product) => {
      const status = getStockStatus(product.stock);

      return (
        <div
          key={product.id}
          className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-200 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8l-9-5-9 5m18 0l-9 5m9-5v8l-9 5m-9-13l9 5m-9-5v8l9 5m0-8v8"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <h3 className="truncate font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400">
                  ID: #{product.id}
                </p>
              </div>
            </div>

            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3">
            <div>
              <p className="text-xs text-gray-400">Category</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">
                {product.category}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Price</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Stock</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">
                {product.stock} units
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => handleEdit(product.id)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => handleDelete(product.id)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      );
    })}
  </div>
</div>


);
};

export default ProductTable;

