import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          Please Go To{" "}
          <Link className="text-decoration-none" to="/">
            Home
          </Link>{" "}
          Page
        </p>
      </div>
    </div>
  );
};

export default Error;
