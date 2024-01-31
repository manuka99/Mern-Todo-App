import mongoose, { ConnectOptions } from "mongoose";
import { DB_URI } from "../../config";

const DB_OPTIONS: ConnectOptions = {
  ignoreUndefined: true,
};

async function connectDB() {
  await mongoose.connect(DB_URI, DB_OPTIONS);
}

export { connectDB };
