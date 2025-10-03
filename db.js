const mongoose=require('mongoose'
);
const mongoDB_URL = "mongodb://127.0.0.1:27017/testhostels";

// MongoDB connection
mongoose.connect(mongoDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
module.exports=db;