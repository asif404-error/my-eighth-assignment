export default function CategorySidebar({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = ["All", "Story", "Tech", "Science"];

  return (
    <div className="w-full md:w-56 shrink-0">
      <div className="card bg-white shadow-md rounded-xl p-4 sticky top-20">
        <h3 className="text-[#0F172A] font-bold text-lg mb-4">Categories</h3>
        <ul className="menu p-0 gap-1">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-[#F59E0B] text-[#0F172A] font-bold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
