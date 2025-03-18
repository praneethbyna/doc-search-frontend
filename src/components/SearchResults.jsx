import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"; // ✅ Correct Heroicons v2 Import

export default function SearchResults({ results }) {
  // Ensure results is always an array
  const safeResults = Array.isArray(results) ? results : [];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2 text-gray-700">Search Results</h3>
      {safeResults.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <ul>
          {safeResults.map((doc, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-4 rounded mb-2 bg-white shadow-md hover:shadow-lg transition"
            >
              {/* Left Side - Document Info */}
              <div>
                <h4 className="font-bold text-blue-600">{doc.title}</h4>
                <p className="text-gray-600">{doc.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Category:</strong> {doc.category}
                </p>
              </div>

              {/* Right Side - Download Icon */}
              <a
                href={doc.download_url}
                download
                className="text-gray-600 hover:text-gray-900 transition"
                title="Download File"
              >
                <ArrowDownTrayIcon className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
