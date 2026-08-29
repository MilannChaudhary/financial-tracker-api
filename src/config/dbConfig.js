import mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/financial_tracker";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
