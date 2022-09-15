const mongoose = require("mongoose");

async function connectMongoose() {
  try {
    await mongoose.connect("mongodb://localhost:27017/crud-express");
    console.log("Connect mongoose db successfully");
  } catch (e) {
    console.log("errors", e);
  }
}

module.exports = { connectMongoose };
