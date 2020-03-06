var express                = require("express"),
	methodOverride         = require("method-override"),
	methodSanitizer        = require("express-sanitizer"),
    app                    = express(),
    bodyParser             = require("body-parser"),
    mongoose               = require("mongoose");

// APP CONFIG
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(methodSanitizer());

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String, // we can also this -- image: {tyle: String, default: "placeholderimage: jpg"}
	body: String,
	created: 
	    {
			type: Date, 
			default: Date.now
		}
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
// 	title: "First Blog",
// 	image: "https://pixabay.com/get/54e5d34b425ab108f5d084609620367d1c3ed9e04e507441742878d29545c6_340.jpg",
// 	body: "HELLO, THIS IS A BLOG POST!"
// });

// RESTfull Routes
app.get("/", function(req, res){
	res.redirect("/blogs");
});
// INDEX Route
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if (err) {
			console.log("ERROR!");
		} else {
			res.render("index", {blogs: blogs});
		}
	});
});
// NEW ROUTE  Displays form to make a new blog through the new file
app.get("/blogs/new",function(req, res){
	res.render("new");
});
// CREATE ROUTE
app.post("/blogs", function(req, res){
	// create a new blog;
	console.log(req.body);
	console.log("================");
	console.log(req.body);
	Blog.create(req.body.blog, function(err, newBlog){
		if (err) {
			console.log("ERROR!");
		} else {
			// then redirect to the index
			res.redirect("/blogs");
		}
	});
});
// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog){
		if (err) {
			res.redirect("/blogs");
		} else {
			res.render("show", {blog: foundBlog});
		}
	});
})
// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog){
		if (err) {
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundBlog});
		}
	});
});
// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if (err) {
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/" + req.params.id);
		}
	});
})
// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
	//res.send("Youe have reached the destroy route!");
	Blog.findByIdAndRemove(req.params.id, function(err){
		if (err) {
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/");
		}
	});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("SERVER IS RUNNING!");
})
