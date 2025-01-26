import { Link } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../Utils/Validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(message);
    console.log(message);
    console.log(name);
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black text-white p-14 absolute w-4/12 my-24 mx-auto right-0 left-0 flex flex-col opacity-85"
      >
        <h1 className="font-bold text-3xl pb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="border border-gray-100 p-3 my-2 rounded"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          className="border border-gray-100 p-3 my-2 rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="border border-gray-100 p-3 my-2 rounded"
        />

        <p className="font-bold text-red-600 text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="bg-[#E50914] p-3 rounded font-bold my-2 cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="m-auto">OR</h3>
        <button className="bg-[#3E3B37] p-3 rounded font-bold my-2 cursor-pointer">
          Use a sign-in
        </button>
        <h3 className="my-2 m-auto cursor-pointer">Forgot password?</h3>
        <div className="flex items-center">
          <input type="checkbox" className="size-4  " />
          <label className="px-3 ">Remember me</label>
        </div>
        <div className="my-2">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}
          <span
            onClick={toggleSignInForm}
            className="font-bold cursor-pointer pl-1"
          >
            {!isSignInForm ? "Sign In" : "Sign Up"}
          </span>
        </div>
        <p className="text-xs py-2">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link className="text-blue-500" to="#">
            Learn more.
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
