import { Input, Button } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Signin() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user.isLogin) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="my-10 ">
      <form className="flex flex-col items-center">
        <Input
          isRequired
          type="text"
          size={"lg"}
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          defaultValue="junior@nextui.org"
          className="w-2/3 sm:w-full  my-4"
        />
        <Input
          isRequired
          type="email"
          size={"lg"}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          defaultValue="junior@nextui.org"
          className="w-2/3 sm:w-full  my-4"
        />
        <Input
          isRequired
          type="password"
          label="Paswword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          defaultValue="junior@nextui.org"
          className="w-2/3 sm:w-full  my-4"
        />

        <Button color="primary" size="lg" className="w-1/2">
          Sign Up
        </Button>

        <h1 className="text-center my-8">Or</h1>

        <Button color="primary" size="lg" className="w-1/2">
          Sign Up With Google
        </Button>
      </form>
    </div>
  );
}

export default Signin;
