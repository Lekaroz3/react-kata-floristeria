import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BroadCumpContext } from "../../context/BroadCumpContext";
import BroadCump from "./broadcump";

function Menu() {
  const { setRuta } = useContext(BroadCumpContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/floristeria"
          onClick={() => setRuta("/floristeria")}
        >
          <img
            src="https://image.freepik.com/vector-gratis/diseno-logotipo-flor_18099-123.jpg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top mr-2"
          />
          FlorBiko2
        </Link>
        <BroadCump></BroadCump>
      </div>
    </nav>
  );
}

export default Menu;
