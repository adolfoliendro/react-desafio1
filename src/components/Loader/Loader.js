import React from "react";
import "./Loader.scss";
import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <div className="loader">
      <h2>
        <Spinner animation="border" />
      </h2>
    </div>
  );
};
