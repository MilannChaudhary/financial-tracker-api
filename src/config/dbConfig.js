import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URI;

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
