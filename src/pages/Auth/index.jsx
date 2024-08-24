import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Authentication</h1>
      <div className="space-x-4">
        <Link
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          to={"/auth/signin"}
        >
          Sign In
        </Link>
        <Link
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          to={"/auth/signup"}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Auth;
