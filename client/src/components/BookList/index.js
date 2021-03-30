import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

function BookList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export default BookList;
