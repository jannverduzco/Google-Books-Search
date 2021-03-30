import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";

function Wrapper(props) {
  return <Container>{props.children}</Container>;
}
export default Wrapper;
