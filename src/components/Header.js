import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container my-3 logo">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png"
          alt="logo"
          width={150}
          className="ms-2"
        />
      </Link>

      <hr />
    </div>
  );
};

export default Header;
