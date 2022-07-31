// import React, { useContext } from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getApps, initializeApp } from "firebase/app";
// import firebaseConfig from "./firebase.config";
// import { UserContext } from "../../App";
// import { useLocation, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const location = useLocation;
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   // const { from } = location.state || { from: { pathname: "/" } };
//   if (getApps.length === 0) {
//     const app = initializeApp(firebaseConfig);
//   }

//   const handleGoogleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const { displayName, email } = result.user;
//         const signedInUser = { name: displayName, email };
//         setLoggedInUser(signedInUser); // ...
//         navigate(from, { replace: true });//code saver

//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorMessage = error.message;
//         console.log(errorMessage);
//       });
//   };
//   return (
//     <div>
//       <h1>This is Login</h1>
//       <button onClick={handleGoogleSignIn}>Google Sign In</button>
//     </div>
//   );
// };

// export default Login;

import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { getApps, initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const location = useLocation;
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // const { from } = location.state || { from: { pathname: "/" } };
  if (getApps.length === 0) {
    const app = initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser); // ...
        navigate(from, { replace: true }); //code saver
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h1>This is Login</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
};

export default Login;
