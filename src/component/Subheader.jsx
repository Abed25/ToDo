import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/button.css";

export default function Subheader() {
  return (
    <div className="subheader">
      <Link to={"/home"}>
        <button
          className="normal"
          style={{
            backgroundColor: "#4C50AF",
          }}
        >
          Home
        </button>
      </Link>
      <Link to={"/list-of-tasks"}>
        <button
          className="normal"
          style={{
            backgroundColor: "#4CAF50",
          }}
        >
          View Tasks
        </button>
      </Link>
      <Link to={"/add-tasks"}>
        <button
          className="normal"
          style={{
            backgroundColor: "#4CAF50",
          }}
        >
          Add Tasks
        </button>
      </Link>
    </div>
  );
}
