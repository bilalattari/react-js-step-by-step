import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <header
      className={`
    ${theme == "light" ? "bg-white text-gray-600" : "bg-gray-800 text-white"}
     body-font`}
    >
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            }
            className="h-10 w-10 rounded-full"
          />
          <span
            className={`${
              theme === "light" ? "text-gray-600" : "text-white"
            } ml-3 text-xl`}
          >
            Header
          </span>
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
        <Button
          onPress={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
          label={theme === "light" ? "Make it Dark" : "Make it Light"}
        />
      </div>
    </header>
  );
}

export default Header;
