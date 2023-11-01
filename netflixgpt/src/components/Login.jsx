import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { auth} from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { BG_URL } from "../utils/constant";
// import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  // const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = (e) => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
     e.preventDefault();

    if (message) return;

//signin/up logic
    if (signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user , "dsa");

          console.log("hi", name.current.value);
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            
          }).then(() => {
            // navigate("/browse")
          }).catch((error) => {
         
            setErrorMessage(error.message);
          });
          console.log(user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+errorMessage);
          // navigate("/");
        });

      
    }
    else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {const user = userCredential.user;})
  .catch((error) => {const errorCode = error.code;const errorMessage = error.message;
    setErrorMessage(errorCode+errorMessage);});

    }
  };
  const toggleSignInForm = () => {setSignInForm(!signInForm);};
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src={BG_URL}
          alt="loading"
        />
      </div>

      <form
        onSubmit={handleButtonClick}
        className="absolute my-36 mx-auto right-0 left-0 p-12 bg-black w-3/12 text-white bg-opacity-80"
      >
        <h1 className=" text-3xl py-4 font-bold">
          {signInForm ?"Sign Up": "Sign In" }
        </h1>
        {signInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-2 my-2 w-full  bg-gray-700"
        />
        <p className="text-red-700">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-600 text-white rounded-lg w-full"
          onClick={handleButtonClick}
        >
          {signInForm ?"Sign Up": "Sign In" }
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {signInForm
            ? "New to Netflix? Sign up Now"
            : "Already Registered User? Log In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
