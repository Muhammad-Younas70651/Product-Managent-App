const CategoryFilter = ({
  selectedCategory = "All",
  onCategoryChange,
}) => {
  const categories = [
    "All",
    "Electronics",
    "Wearables",
    "Gaming",
    "Accessories",
    "Home",
    "Other",
  ];

  return (
    <div className="w-full">
      <label
        htmlFor="category-filter"
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        Category
      </label>

      <div className="relative">
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => {
            if (onCategoryChange) {
              onCategoryChange(e.target.value);
            }
          }}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-gray-700 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
