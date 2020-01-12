const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const http = require("http");
const fs = require("fs");
let port = process.env.PORT || 8080;

// Making an express application
const server = express();

// Render HTML files (from 'views' directory) using the EJS views engine
server.set("views", `${__dirname}/views`);

// Using the EJS template engine to view EJS files on browser
server.set("view engine", "ejs");

// Accessing CSS & JS files
server.use(cors());
server.use(express.static(`${__dirname}/public`));
server.use(express.urlencoded({
  extended: true
}));

// Parses bodies from url
server.use(bodyParser.urlencoded({
  extended: true
}));

// By entering localhost:8080 in the address bar, we navigate to homepage
server.get("/", (req, res) => {
  fs.readFile("./blog.json", "utf-8", (err, data) => {
    let blogEntries = JSON.parse(data);
    res.status(200).render("index", {
      entries: blogEntries.entries
    });
  });
});

// goes to the comments page
server.get("/commentsPage", (req, res) => {
  fs.readFile("./blog.json", "utf-8", (err, data) => {
    let blogEntries = JSON.parse(data);
    let entryID = req.query.entryID;
    res.status(200).render("comments", {
      entry: blogEntries.entries[entryID],
      id: entryID
    });
  });
});

// Updates the comment of the respective entry
server.post('/addComment', (req, res) => {
  // Blog post ID
  let entryID = req.body["entryID"];

  //passing data from input into the json file
  fs.readFile("./blog.json", "utf-8", (err, data) => {
    if (err) throw err;
    
    // The comment made by the user
    let comment = req.body["comment"];
    let listOfEntries = JSON.parse(data);

    listOfEntries.entries[entryID].comments.push(comment);

    // Storing the entry in the json file
    fs.writeFile("./blog.json", JSON.stringify(listOfEntries), "utf-8", err => {
      if (err) throw err;
    });
  });
  
  // Refreshes to see new comments
  res.redirect(`/commentsPage?entryID=${entryID}`); 
});

// Navigates to a page where users can create blog entries
server.get("/postPage", (req, res) => res.status(200).render("addpost"));

//route for making an entry
server.post("/addPost", (req, res) => {
  //passing data from input into the json file
  fs.readFile("./blog.json", "utf-8", (err, data) => {
    if (err) throw err;
    let listOfEntries = JSON.parse(data);

    // We're adding the user's entry to the list of entries
    listOfEntries.entries[generateID()] = {
      title: req.body.title,
      author: req.body.user,
      entry: req.body.newEntry,
      gif: req.body.radio,
      reactions: {
        like: 0,
        dislike: 0,
        love: 0,
        happy: 0,
        sad: 0
      },
      comments: []
    };

    // Storing the entry in the json file
    fs.writeFile("./blog.json", JSON.stringify(listOfEntries), "utf-8", err => {
      if (err) throw err;
    });
  });
  //  Navigating back to the add-post page
  res.redirect("/postPage");
});

// To change emoji reaction values in .json file
server.post('/emoji', (req, res) => {
  //passing data from input into the json file
  fs.readFile("./blog.json", "utf-8", (err, data) => {
    if (err) throw err;
    // The emoji selected by the user
    let selectedEmoji = req.body["emoji"];
    // ID of the blog post
    let entryID = req.body["entryID"];
    let listOfEntries = JSON.parse(data);

    // We're adding the user's entry to the list of entries
    switch (selectedEmoji) {
      case "like":
        listOfEntries.entries[entryID].reactions["like"] += 1;
        break;
      case "dislike":
        listOfEntries.entries[entryID].reactions["dislike"] += 1;
        break;
      case "love":
        listOfEntries.entries[entryID].reactions["love"] += 1;
        break;
      case "happy":
        listOfEntries.entries[entryID].reactions["happy"] += 1;
        break;
      case "sad":
        listOfEntries.entries[entryID].reactions["sad"] += 1;
        break;
    }

    // Storing the entry in the json file
    fs.writeFile("./blog.json", JSON.stringify(listOfEntries), "utf-8", err => {
       if (err) throw err;
    });
  });

  // Update emoji values on homepage
  res.redirect('/');
});

// Creates a 7-digit unique ID for blog entry
const generateID = () => {
  let ID = "";

  // Appends a single random character to ID
  for (let i = 1; i <= 7; i++) ID += String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);

  return ID;
}

// Listening to the server at an arbitrary port or port 8080
server.listen(port, () => console.log(`Listening to port ${port}`));