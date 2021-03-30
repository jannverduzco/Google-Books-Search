import React from "react";
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark font-link">
      <a className="navbar-brand" href="/">
        Search Books
      </a>
      <a className="navbar-brand" href="/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
