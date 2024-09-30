
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database is successfully connected!");
    console.log("MongoDB Connected:", `${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDB;