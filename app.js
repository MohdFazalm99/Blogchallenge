//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "“Blog” is an abbreviated version of “weblog,” which is a term used to describe websites that maintain an ongoing chronicle of information. A blog features diary-type commentary and links to articles on other websites, usually presented as a list of entries in reverse chronological order. Blogs range from the personal to the political, and can focus on one narrow subject or a whole range of subjects."
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts =[];

app.get("/", function(req,res){
  res.render("home", {
    StartingContent:homeStartingContent,
    posts:posts
  });

});

app.get("/about", function(req,res){
  res.render("about", {about:aboutContent});
});

app.get("/contact", function(req,res){
  res.render("contact", {contact:contactContent});
});


app.get("/compose", function(req,res){
  res.render("compose");
});


app.post("/compose",function(req,res){
  const post ={
    title:req.body.postTitile,
    content:req.body.postBody
  };
  posts.push(post);
  res.redirect("/");
});


app.get("/posts/:postName", function(req,res){
const requestedTitle= req.params.postName;

posts.forEach(function(post){
  const storedTitle = post.title;

  if(storedTitle === requestedTitle){
    console.log("match found");
  }
});

});






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
