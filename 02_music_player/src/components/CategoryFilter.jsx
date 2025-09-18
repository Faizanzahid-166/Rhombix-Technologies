function CategoryFilter({ setCategory }) {
  return (
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="mb-4 p-2 w-1/2 mt-3 border bg-gray-600 rounded"
    >
      <option value="All">All Categories</option>
      <option value="Pop">Pop</option>
      <option value="Rock">Rock</option>
    </select>
  );
}

export default CategoryFilter;

