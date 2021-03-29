// Importing dependencies
import axios from "axios";
const APIKEY = process.env.API_KEY;
const bookSearched = "";

export default {
  getBooks: function () {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + bookSearched + APIKEY);
  }
};
