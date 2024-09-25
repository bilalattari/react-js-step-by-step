import { useEffect, useState } from "react";

function TraditionalFormUsingHook() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  useEffect(() => {
    if (validateEmail(email)) {
      setEmailError(null);
    } else {
      setEmailError("Email is not valid.");
    }
  }, [email]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };

  return (
    <div className="flex flex-col">
      <form action="" onSubmit={onSubmit} className="flex flex-col mt-20">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 text-xl my-2"
        />
        {emailError ? (
          <span className="text-red-600">Email is not valid</span>
        ) : null}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 text-xl my-2"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="border p-3 text-xl my-2"
        />
        <input
          type="submit"
          className="btn bg-purple-400 p-3 rounded-md text-center text-white cursor-pointer"
        />
      </form>
    </div>
  );
}

export default TraditionalFormUsingHook;
