import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import BookList from "../components/BookList";
import BookListItem from "../components/BookListItem";
import SearchBtn from "../components/SearchBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../components/SearchForm";

function SearchBooks() {
  // Setting component's initial state
  const [books, setBooks] = useState([]);
  const [bookResults, setBookResults] = useState({});

  // Loading all the books with our API call to set them to books state
  function searchBooks(query) {
    API.getGoogleBooks(query)
      .then((res) => setBooks(res.data.item))
      .catch((err) => console.log(err));
  }

  // Handling input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setBookResults({ [name]: value });
  }

  // Handling Fomm Submit
  function handleFormSubmit(event) {
    event.preventDefault();
    searchBooks();
  }

  return (
    <Wrapper>
      <Row>
        <Col>
          <Jumbotron className="jumbotron">
            <h1>GOOGLE BOOK SEARCH</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Search book..."
            />
            <SearchBtn disabled={!bookResults.title} onClick={handleFormSubmit}>
              Search Book
            </SearchBtn>
          </form>

          <h1>Search Results</h1>
          {bookResults.length ? (
            <BookList>
              {books.map((book) => (
                <BookListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                </BookListItem>
              ))}
            </BookList>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Wrapper>
  );
}
export default SearchBooks;
