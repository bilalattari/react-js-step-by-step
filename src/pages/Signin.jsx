import { Input, Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { AuthContext } from "../context/AuthContext";

function Signin() {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLogin) {
      navigate("/");
    }
  }, [user]);

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result=>", result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User=>", user);
        navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error=>", errorCode, errorMessage);
        // ...
      });
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/");
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="my-10 ">
      <form className="flex flex-col items-center">
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

        <Button
          onClick={handleSignIn}
          isLoading={loading}
          color="primary"
          size="lg"
          className="w-1/2"
        >
          Sign In
        </Button>

        <h1 className="text-center my-8">Or</h1>

        <Button
          onClick={handleSignInWithGoogle}
          color="primary"
          size="lg"
          className="w-1/2"
        >
          Sign In With Google
        </Button>
      </form>
    </div>
  );
}

export default Signin;
