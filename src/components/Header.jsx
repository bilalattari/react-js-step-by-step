import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            }
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-3 text-xl">Header</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"contactus"} className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
          <Link to={"about"} className="mr-5 hover:text-gray-900">
            About Us
          </Link>
        </nav>
        <Button onPress={() => navigate("/auth")} label={"Login"} />
      </div>
    </header>
  );
}

export default Header;
