var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
// 	title: "How to cook best burger pt.4",
// 	content: "AJIOJFOWJPWKPW"
// }, function(err, post){
// 	User.findOne({email: "bod@gmail.com"}, function(err, foundUser){
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, data){
// 				if (err) {
// 			         console.log(err);
// 				} else {
// 					console.log(data);
// 				}
// 			});
// 		}
// 	});
// });

// Find User
// Find all posts for the user
User.findOne({email: "bod@gmail.com"}).populate("posts").exec(function(err, user){
	if (err) {
		console.log(err);
	} else {
		console.log(user);
	}
});

// User.create({
// 	email: "bod@gmail.com",
// 	name: "Bob Belcher"
// });




