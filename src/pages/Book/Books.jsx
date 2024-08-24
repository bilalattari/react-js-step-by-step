import { useState } from "react";
import { Link } from "react-router-dom";
import { allBooks } from "../../constant/books";

function Books() {
  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [selectedType, setSelectedType] = useState("All");

  const filterBooks = (type) => {
    setSelectedType(type);
    if (type === "All") {
      setFilteredBooks(allBooks);
    } else {
      setFilteredBooks(allBooks.filter((book) => book.type === type));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Filter Section */}

      <div className="text-center my-8">
        <button
          onClick={() => filterBooks("All")}
          className={`inline-block px-6 py-2 rounded-lg mx-2 ${
            selectedType === "All"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } border border-blue-600 hover:bg-blue-700 hover:text-white transition duration-300`}
        >
          All
        </button>
        <button
          onClick={() => filterBooks("Fiction")}
          className={`inline-block px-6 py-2 rounded-lg mx-2 ${
            selectedType === "Fiction"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } border border-blue-600 hover:bg-blue-700 hover:text-white transition duration-300`}
        >
          Fiction
        </button>
        <button
          onClick={() => filterBooks("Non-Fiction")}
          className={`inline-block px-6 py-2 rounded-lg mx-2 ${
            selectedType === "Non-Fiction"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } border border-blue-600 hover:bg-blue-700 hover:text-white transition duration-300`}
        >
          Non-Fiction
        </button>
        <button
          onClick={() => filterBooks("Children")}
          className={`inline-block px-6 py-2 rounded-lg mx-2 ${
            selectedType === "Children"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } border border-blue-600 hover:bg-blue-700 hover:text-white transition duration-300`}
        >
          Children's Books
        </button>
      </div>

      {/* Books Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-700 mb-4">{book.author}</p>
              <Link
                to={`/books/${book.title}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
