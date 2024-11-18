import React from "react";
import Login from "../Components/User Login/Login";
const handleSignIn = (e) => {
  e.preventDefault();
  console.log("Sign In form submitted");
};

const handleSignUp = (e) => {
  e.preventDefault();
  console.log("Sign Up form submitted");
};
const page = () => {
  return (
    <div>
      <Login
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        signInTitle="Sign In"
        signUpTitle="Sign Up"
      />
    </div>
  );
};

export default page;
