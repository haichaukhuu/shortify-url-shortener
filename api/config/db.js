
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database is successfully connected!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDB;