import app from "./app";
import { SERVER_PORT } from "./config";
import { connectDB } from "./startups/database";

const startApp = async () => {
  try {
    // connect with db
    await connectDB();
    console.log("Connected to database");

    // start server listening
    app.listen(SERVER_PORT, () =>
      console.log(`Server running on port ${SERVER_PORT}`)
    );
  } catch (error: any) {
    console.error("Database connectivity failed", error.message);
    startApp();
  }
};

startApp();
