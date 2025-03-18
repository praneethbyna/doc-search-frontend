import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search documents..."
        className="border rounded-md px-3 py-2 w-full"
      />
      <button
        type="submit"
        className="mt-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Search
      </button>
    </form>
  );
}
