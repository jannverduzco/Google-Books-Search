// Importing dependencies
import axios from "axios";
const APIKEY = process.env.API_KEY;
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets books from the Google Books API
  getGoogleBooks: function (query) {
    console.log(query);
    return axios.get(BASEURL + query.search + APIKEY);
  },
  // Gets all the books in the database
  getAllBooks: function () {
    return axios.get("/api/books");
  },
    // Gets specific book
    getBook: function (id) {
      return axios.get("/api/books" + id);
    },
  // Saves books to the database
  saveBook: function (saveBookData) {
    return axios.get("/api/books", saveBookData);
  },
};
