// Importing dependencies
import axios from "axios";
const APIKEY = process.env.API_KEY;

export default {
  getBooks: function () {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=search-terms&key=" + APIKEY
    );
  },
};
