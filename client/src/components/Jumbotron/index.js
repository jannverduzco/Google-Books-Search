import React from "react";
import bgimage from "../../Assets/image_background.png";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
