var Campground = require("../models/campground");
var Comment = require("../models/comment");

// All the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
	if (req.isAuthenticated()) {
	    Campground.findById(req.params.id, function(err, foundCampground){
		    if (err) {
				req.flash("error", "Campground not found");
		    	res.redirect("back");
		    } else {
				// does user own the comment?
				if (foundCampground.author.id.equals(req.user._id) || req.user.isAdmin) {
					next();
				} else {
					req.flash("error", "You don't have permission to do that");
					res.redirect("back");
				}
		    }
	    });
	} else {   // not, you need to log in
		req.flash("error", "You need to be logged in to do that");
		res.redirect("back");		
	}
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
	if (req.isAuthenticated()) {
	    Comment.findById(req.params.comment_id, function(err, foundComment){
		    if (err) {
				req.flash("error", "Comment not found");
		    	res.redirect("back");
		    } else {
				// does user own the comment?
				if (foundComment.author.id.equals(req.user._id) || req.user.isAdmin) {
					next();
				} else {
					req.flash("error", "You don't have permission to do that");
					res.redirect("back");
				}
		    }
	    });
	} else {   // not, you need to log in
		req.flash("error", "You need to be logged in to do that");
		res.redirect("back");		
	}
};

middlewareObj.isLoggedIn = function(req, res, next){
	if (req.isAuthenticated()) {
		return next();
	}
	req.flash("error", "You need to be logged in to do that");
	res.redirect("/login");
};

middlewareObj.isAdmin = function(req, res, next) {
    if (req.user.isAdmin) {
        next();
    } else {
        req.flash('error', 'This site is now read only thanks to spam and trolls.');
        res.redirect('back');
    }
};

middlewareObj.isSafe = function(req, res, next) {
    if (req.body.image.match(/^https:\/\/images\.unsplash\.com\/.*/)) {
        next();
    } else {
        req.flash('error', 'Only images from images.unsplash.com allowed.\nSee https://youtu.be/Bn3weNRQRDE for how to copy image urls from unsplash.');
        res.redirect('back');
    }
};

module.exports = middlewareObj;