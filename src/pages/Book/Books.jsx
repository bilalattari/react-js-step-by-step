import { useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const allBooks = [
    {
      id: 1,
      title: "Fiction Book One",
      author: "Author One",
      type: "Fiction",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Non-Fiction Book One",
      author: "Author Two",
      type: "Non-Fiction",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Children's Book One",
      author: "Author Three",
      type: "Children",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Fiction Book Two",
      author: "Author Four",
      type: "Fiction",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Non-Fiction Book Two",
      author: "Author Five",
      type: "Non-Fiction",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      title: "Children's Book Two",
      author: "Author Six",
      type: "Children",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 7,
      title: "Fiction Book Three",
      author: "Author Seven",
      type: "Fiction",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 8,
      title: "Non-Fiction Book Three",
      author: "Author Eight",
      type: "Non-Fiction",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 9,
      title: "Children's Book Three",
      author: "Author Nine",
      type: "Children",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 10,
      title: "Fiction Book Four",
      author: "Author Ten",
      type: "Fiction",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    // Add more books as needed
  ];

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

      
      <div className="text-center mb-8">
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
                to={`/books/${book.id}`}
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
