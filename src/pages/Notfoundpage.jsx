import React from "react";
import { Link } from "react-router-dom";
const Notfoundpage = () => {
  return (
    <>
      <h1>Page not FOUND</h1>
      <Link to={"/"}>
        <button>Go back home</button>
      </Link>
    </>
  );
};

export default Notfoundpage;
