import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../components/Form";

function SearchBooks() {
  // Setting component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setformObject] = useState({});

  // Setting our useEffect to run once when the page renders
  useEffect(() => {
    loadBooks();
  }, []);

  // Loading all the books with our API call to set them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Handling input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  return (
    <Wrapper>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Search for books</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
          </form>
        </Col>
      </Row>
    </Wrapper>
  );
}
export default SearchBooks;
