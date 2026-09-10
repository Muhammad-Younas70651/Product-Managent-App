import { useState } from "react";

const ProductForm = ({ initialData = {}, onSubmit, submitText = "Add Product" }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    category: initialData.category || "",
    price: initialData.price || "",
    stock: initialData.stock || "",
    description: initialData.description || "",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Electronics",
    "Wearables",
    "Gaming",
    "Accessories",
    "Home",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts correcting the field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (formData.price === "") {
      newErrors.price = "Price is required.";
    } else if (Number(formData.price) < 0) {
      newErrors.price = "Price cannot be negative.";
    }

    if (formData.stock === "") {
      newErrors.stock = "Stock quantity is required.";
    } else if (Number(formData.stock) < 0) {
      newErrors.stock = "Stock cannot be negative.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const productData = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };

    if (onSubmit) {
      onSubmit(productData);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-gray-900 outline-none transition duration-200 ${
      errors[field]
        ? "border-red-300 bg-red-50 focus:border-red-500"
        : "border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Product Information */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            Product Information
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter the basic information about your product.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Product Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Product Name <span className="text-red-500">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className={inputClass("name")}
            />

            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Category <span className="text-red-500">*</span>
            </label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={inputClass("category")}
            >
              <option value="">Select category</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {errors.category && (
              <p className="mt-1.5 text-xs text-red-500">{errors.category}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Price <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">
                $
              </span>

              <input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                className={`${inputClass("price")} pl-8`}
              />
            </div>

            {errors.price && (
              <p className="mt-1.5 text-xs text-red-500">{errors.price}</p>
            )}
          </div>

          {/* Stock */}
          <div>
            <label
              htmlFor="stock"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Stock Quantity <span className="text-red-500">*</span>
            </label>

            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
              className={inputClass("stock")}
            />

            {errors.stock && (
              <p className="mt-1.5 text-xs text-red-500">{errors.stock}</p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Description <span className="text-red-500">*</span>
            </label>

            <textarea
              id="description"
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a detailed product description..."
              className={`${inputClass("description")} resize-none`}
            />

            <div className="mt-1.5 flex items-center justify-between">
              {errors.description ? (
                <p className="text-xs text-red-500">{errors.description}</p>
              ) : (
                <span />
              )}

              <span className="text-xs text-gray-400">
                {formData.description.length} characters
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition duration-200 hover:border-gray-300 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
