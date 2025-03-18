import { useState } from "react";
import FileUpload from "./components/FileUpload";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Navbar from "./components/Navbar";

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      alert("Please enter a search term.");
      return;
    }

    const response = await fetch(
      `http://localhost:5000/api/search?query=${query}`
    );
    const data = await response.json();

    if (!response.ok) {
      alert(`Error: ${data.error}`);
      return;
    }

    // Ensure results is always an array
    setResults(Array.isArray(data) ? data : []);
  };

  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-purple-100 to-blue-300">
      <Navbar />

      {/* Main Container with Side-by-Side Layout */}
      <div className="container mx-auto p-6 max-w-6xl bg-white shadow-xl rounded-lg">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Upload Section (Left) */}
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
            <FileUpload />
          </div>

          {/* Search Section (Right) */}
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
            <SearchBar onSearch={handleSearch} />
            <SearchResults results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
