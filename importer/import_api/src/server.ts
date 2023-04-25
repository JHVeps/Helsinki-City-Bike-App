import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

const mongoUrl = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

if (mongoUrl) {
  mongoose.connect(mongoUrl).catch((error: Error) => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + error
    );
    process.exit(1);
  });
}

app.listen(app.get("port"), () => {
  console.log("  server is running at http://localhost:%d", app.get("port"));
  console.log("  Press CTRL-C to stop\n");
});
