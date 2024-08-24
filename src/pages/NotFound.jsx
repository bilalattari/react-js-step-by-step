function NotFound() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-8">Page Not Found</h2>
          <p className="text-gray-700 mb-8">
            Sorry, the page you are looking for does not exist. Please check the URL or go back to the homepage.
          </p>
          <a
            href="/"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    );
  }
  
  export default NotFound;
  