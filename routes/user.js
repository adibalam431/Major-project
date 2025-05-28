const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");
const { isLoggedIn, isOwner, validateList } = require("../middleware.js");



router.route("/" ,(req,res)=>{
    res.send("betis jeetbe");
})
    

//signup
router.route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signUpUser));


//login 
router.route("/login")
    .get(userController.renderLogInForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), wrapAsync(userController.logInUser));


//logout
router.get("/logout", userController.logOut);

module.exports = router;