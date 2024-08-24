import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const goToAboutPage = () => navigate("/about");
  const goToBooksPage = () => navigate("/books");

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Bookstore</h1>
          <p className="text-xl mb-8">Discover your next great read!</p>
          <button
            onClick={goToAboutPage}
            className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Learn More About Us
          </button>
        </div>
      </section>

      {/* Book Types Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Browse by Book Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Fiction</h3>
            <p className="text-gray-700 mb-4">
              Dive into the world of imagination with our wide range of fiction
              books.
            </p>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Fiction
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Non-Fiction</h3>
            <p className="text-gray-700 mb-4">
              Learn and grow with our extensive collection of non-fiction books.
            </p>
            <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
              Explore Non-Fiction
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Children's Books</h3>
            <p className="text-gray-700 mb-4">
              Inspire young minds with our selection of children's books.
            </p>
            <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300">
              Explore Children's Books
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <button
            onClick={goToBooksPage}
            className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
          >
            See All Books
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
