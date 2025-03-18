import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`Error: ${data.error}`);
        return;
      }

      alert(`File uploaded successfully! Download at: ${data.download_url}`);
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6 w-full">
      <h3 className="text-xl font-semibold mb-3">Upload Document</h3>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-2 block w-full border p-2 rounded border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 block w-full border p-2 rounded border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-2 block w-full border p-2 rounded border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
      ></textarea>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-2 block w-full border p-2 rounded border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
      />
      <button
        onClick={handleUpload}
        className="mt-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Upload
      </button>
    </div>
  );
}
