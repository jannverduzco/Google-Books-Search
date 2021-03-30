import React, { useState } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import SearchBtn from "../components/SearchBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../components/SearchForm";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function SearchBooks() {
  // Setting component's initial state

  const [search, setSearch] = useState();
  const [bookResults, setBookResults] = useState({});

  // Loading all the books with our API call to set them to books state
  function searchBooks(query) {
    API.getGoogleBooks(query)
      .then((res) => setBookResults(res.data.items))
      .catch((err) => console.log(err));
  }

  // Handling input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearch({ [name]: value });
  }

  // Handling Fomm Submit
  function handleFormSubmit(event) {
    event.preventDefault();
    searchBooks(search);
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
            <SearchBtn disabled={!SearchBooks} onClick={handleFormSubmit}>
              Search Book
            </SearchBtn>
          </form>

          <h1>Search Results</h1>
          {bookResults && bookResults.length ? (
            <List>
              {bookResults.map((book) => (
                <ListItem key={book.id}>
                  <Row>
                    <Col >
                      <Link to={book.volumeInfo.infoLink}>
                        {" "}
                        {book.volumeInfo.title} by {book.volumeInfo.authors}
                      </Link>
                    </Col>
                    <Col >
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt="book"
                      />
                    </Col>
                  </Row>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Wrapper>
  );
}
export default SearchBooks;
