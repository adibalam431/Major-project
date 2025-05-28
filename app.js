if(process.env.NODE_ENV != "production"){
require("dotenv").config();
}

// info@mediconnectindia.com  
const express = require("express");
const multer = require("multer");     //use for save files
const upload = multer({dest:"uploads/"})//same use file save
const app = express();
const mongoose = require("mongoose");
const mongoUrl = ("mongodb://127.0.0.1:27017/wonderlust");
const path = require("path");//for using ejs 
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const mongoStore = require("connect-mongo") //store session online require express-session
const flash = require("connect-flash");
const passport = require("passport");
const passportLocal = require("passport-local");
const User = require("./models/user.js");
const dbUrl = process.env.mongo_server_connection;

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


const store = mongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret:process.env.SECRET,
  },
  touchAfter:24*3600,
});



sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));// use static authenticate method of model in LocalStrategy

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
})


async function main() {
  await mongoose.connect(dbUrl);
}
main().then(() => {
  console.log("connected to DB")
}).catch((err) => {
  console.log("ErrorOccur while interacting with DB", err)
})

app.engine("ejs", ejsMate);//for ejsMate boilerplate
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));


// app.get("/demo", async (req,res)=>{
// let demoUser = new User({
//   email :"demo@demo.com",
//   username : "demo"
// });
//  let regUser  = await User.register(demoUser, "demo");
// res.send(regUser);
// });


app.get("/", (req, res) => {
  res.send("Server is live!");
});

app.use("/", userRouter);
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);







const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("listings/error.ejs", { err });
});


//app.get("/testListing", async (req, res) => {
//     let sampleListing =  new Listing({
//         title: "my home 2",
//         description: "dont know 2",
//         price: 102,
//         location: "ghar 2",
//         country: "india",
//     });

//     await sampleListing.save();
//     console.log("saved");
//     res.send("successful");
// })


