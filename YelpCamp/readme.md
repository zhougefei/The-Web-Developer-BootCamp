## YelpCamp

## Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds
  Each Campground has:
  Name
  Image
  
## Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

## Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

## Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

## Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

## Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

## Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

## Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

## Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

## Style Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Auth Pt.1 - Add User Model
* Install all packages needed for auth
* Define User model

## Auth Pt.2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt.3 - Login
* Add login route
* Add login template

## Auth Pt.4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not sign in
* Add links to navbar

## Auth Pt.5 - Show/Hide Links
* Show/hide auth links correctly

## Refactor The Routes
* Use Express router to reorganize all routes

## Users + Comments
* Associate users and comments
* Save suthor's name to a comment automatically

## Users + Camgroundss
* Prevent an un-authenticated user from creating a campground
* Save username+id to a newly created campground

## Editting Camgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add link to Edit Page
* Add Update route

## Deleting Campgrounds
* Add Destroy Route
* Add Delete button

## Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

## Editting Comments
* Add Edit Route for Comments
* Add button to ddit comment
* Add Update route

## Deleting Comments
* Add Destroy Route
* Add Delete button

## Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

## Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

## Add Google API

## Add Aministrator

## Add User Profile

## Add Fuzzy Search

## Add User Profile Edit

## Reset password
