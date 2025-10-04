

  


// mongoDB_URL="mongodb+srv://jhunnakumarbth2003_db_user:zKR1SsWCXhO5te2l@cluster0.1i1frvk.mongodb.net/testmeraj"



const mongoose = require('mongoose');
require('dotenv').config();
//  const mongoDB_URL = process.env.mongoDB_URL;
const ONLINE_URL = process.env.ONLINE_URL;

// MongoDB connection
mongoose.connect(ONLINE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("✅ MongoDB is connected successfully");
});

db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("⚠️ MongoDB is disconnected");
});

module.exports = db;
