const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const mongoUrl = ("mongodb://127.0.0.1:27017/wonderlust");


async function main() {
    await mongoose.connect(mongoUrl);
}

main().then(() => {
    console.log("connected to DB")
}).catch((err) => {
    console.log("ErrorOccur while interacting with DB", err)
});

const initDB = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data inserted successfully");
}

initDB();