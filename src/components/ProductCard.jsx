const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    stock: 25,
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: 149.99,
    stock: 8,
    description:
      "Modern smart watch with fitness tracking, heart rate monitoring, and notifications.",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    category: "Gaming",
    price: 79.99,
    stock: 0,
    description:
      "Mechanical gaming keyboard with RGB lighting and responsive keys.",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 49.99,
    stock: 32,
    description:
      "Durable laptop backpack with multiple compartments and water-resistant material.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    stock: 6,
    description:
      "Portable Bluetooth speaker with powerful sound and up to 12 hours of battery life.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 29.99,
    stock: 45,
    description:
      "Ergonomic wireless mouse with accurate tracking and comfortable design.",
  },
  {
    id: 7,
    name: "Gaming Headset",
    category: "Gaming",
    price: 89.99,
    stock: 14,
    description:
      "Immersive gaming headset with surround sound and a noise-cancelling microphone.",
  },
  {
    id: 8,
    name: "USB-C Hub",
    category: "Accessories",
    price: 39.99,
    stock: 3,
    description:
      "Multi-port USB-C hub with HDMI, USB ports, SD card reader, and fast charging.",
  },
];

const ProductCard = () => {
  const handleEdit = (id) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete product:", id);
  };

  return (
    <div className="mx-auto max-w-7xl">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Products
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your products and inventory.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {products.map((product) => {
          const inStock = product.stock > 0;
          const lowStock =
            product.stock > 0 && product.stock <= 10;

          return (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-blue-50">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-16 w-16 text-blue-200 transition duration-500 group-hover:scale-110"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8l-9-5-9 5m18 0l-9 5m9-5v8l-9 5m-9-13l9 5m-9-5v8l9 5m0-8v8"
                  />
                </svg>

                {/* Category */}
                <span className="absolute left-3 top-3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow">
                  {product.category}
                </span>

                {/* Stock Status */}
                <span
                  className={`absolute right-3 top-3 rounded-lg px-3 py-1 text-xs font-semibold shadow ${
                    !inStock
                      ? "bg-red-50 text-red-600"
                      : lowStock
                      ? "bg-yellow-50 text-yellow-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {!inStock
                    ? "Out of stock"
                    : lowStock
                    ? "Low stock"
                    : "In stock"}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-5">

                {/* Product Name */}
                <h3
                  className="truncate text-lg font-bold text-gray-900 transition duration-200 group-hover:text-blue-600"
                  title={product.name}
                >
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-2 h-10 overflow-hidden text-sm leading-5 text-gray-500">
                  {product.description}
                </p>

                {/* Price and Stock */}
                <div className="mt-5 flex items-center justify-between border-b border-gray-100 pb-4">

                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      Price
                    </p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-medium text-gray-400">
                      Stock
                    </p>

                    <p
                      className={`mt-1 text-sm font-bold ${
                        !inStock
                          ? "text-red-500"
                          : lowStock
                          ? "text-yellow-500"
                          : "text-gray-800"
                      }`}
                    >
                      {product.stock} units
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">

                  {/* Edit */}
                  <button
                    type="button"
                    onClick={() => handleEdit(product.id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
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

                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    type="button"
                    onClick={() => handleDelete(product.id)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
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
              </div>

              {/* Bottom Hover Effect */}
              <div className="h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;

