var mongoose = require("mongoose");
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
// // add a new cat to the DB
// var george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// george.save(function(err, cat){
// 	if (err) {
// 		console.log("SOMETHING WENT WRONG!");
// 	} else {
// 		console.log("We just saved a cat to the DB");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Bland"
}, function(err, newCat) {
	if (err) {
		console.log("OH NO, ERROR!");
	    console.log(err);
	} else {
		console.log("The new created cat is: ");
		console.log(newCat);
	}
});
// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
	if (err) {
		console.log("OH NO ERROR!");
	    console.log(err);
	} else {
		console.log("All the cats: ");
		console.log(cats);
	}
});