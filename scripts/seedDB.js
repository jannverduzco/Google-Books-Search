// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

// Setting connection to mongoosee
mongoose.connect(process.env.MONGODB.URI || "mongodb://localhost/googlebooks");

const googleBookSeed = [
  {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description:
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    imageUrl:
      "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    bookLink:
      "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
  },
  {
    title: "Born a Crime Stories from a South African Childhood",
    authors: ["Trevor Noah"],
    description:
      "“Born A Crime” is a collection of personal stories about growing up in South Africa during the last gasps of apartheid and the tumultuous days of freedom that came with its demise.",
    imageUrl:
      "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    bookLink:
      "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
  },
];

// Inserting documents with the specified filds into database
db.Book.remove({})
  .then(() => db.Book.collection.inserMany(googleBookSeed))
  .then((data) => {
    console.log(data.result.n + "inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
