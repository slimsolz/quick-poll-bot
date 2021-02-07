import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import index from "./routes";
import { dbURL } from "./config/db.config";

require("express-async-errors");

const app = express();

// connect to mongodb
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(`connected to db and app started on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("something went wrong ", error);
    process.exit();
  });

const port = process.env.PORT || 8000;
app.set("port", port);

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", index);

app.use((err, req, res, next) => {
  /* istanbul ignore next */
  return res.status(400).json({
    success: false,
    message: err.message,
  });
});

export default app;
