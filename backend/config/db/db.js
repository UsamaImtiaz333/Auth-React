import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://usamaimtiaz333:1234@cluster0.ylenjgy.mongodb.net/tasksphare?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default connectDb;
