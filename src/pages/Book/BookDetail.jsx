import { useParams } from "react-router";
import { allBooks } from "../../constant/books";

function BookDetail() {
  const { title } = useParams();
  console.log("title=>", title);

  const {
    title: bookTitle,
    id,
    imageUrl,
    author,
  } = allBooks.find((data) => data.title == title);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
          {/* Book Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={imageUrl}
              alt={bookTitle}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Book Details */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <h2 className="text-2xl text-gray-700 mb-4">by {author}</h2>
            <p className="text-2xl font-bold text-blue-600 mb-6">$20.00</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
