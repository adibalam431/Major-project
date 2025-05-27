const User = require("../models/user.js");

module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs")
};

module.exports.renderLogInForm = (req, res) => {
    res.render("users/login.ejs")
}

module.exports.signUpUser = async (req, res) => {
    try{
        let { username, email, password } = req.body;
    let newUser = new User({ email, username });
    await User.register(newUser, password);
    req.login(newUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome");
        res.redirect("/listings")
    })   
    }catch(error){
        req.flash("error",error.message);
        res.redirect("/signup")
    }
};

module.exports.logInUser = async (req, res) => {
    req.flash("success","Welcome back to Wonderlust");
    let redirect = await res.locals.redirectUrl || "/listings"
    res.redirect(redirect);
};

module.exports.logOut = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");

    });
}