import mongoose from "mongoose";

import app from "./app";

const mongoUrl = process.env.MONGODB_URI;

if (mongoUrl) {
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err: Error) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit(1);
    });
}

// Start Express server
app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});
