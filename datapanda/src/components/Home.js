import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import {auth , provider}  from '../firebase.js';
import { Redirect } from "react-router-dom";


const Home = () => {
  const { currentUser } = useContext(AuthContext);
    // Sign in with google
    const signin = () => {
      auth.signInWithPopup(provider).catch(alert);
  }
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <h1>Home</h1>
      {currentUser ? (
        <p>
          You are logged - <Link to="/dashboard">View Dashboard</Link>
        </p>
      ) : (
        <p>
          <div>
          <Link to="/login">Log In</Link> / <Link to="/signup">Sign Up</Link> 
          </div>
          <p> OR </p>
          <div>
          {<button onClick={signin}>Sign In with Google</button> }
            {/* <Link to={signin}>Sign In with Google</Link> */}
          </div>
        </p>
      )}
    </>
  );
};

export default Home;