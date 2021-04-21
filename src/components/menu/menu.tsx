import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://image.freepik.com/vector-gratis/diseno-logotipo-flor_18099-123.jpg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top mr-2"
          />
          FlorBiko2
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
