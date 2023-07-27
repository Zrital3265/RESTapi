import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server is running on http://localhost:8080/");
});
const mongoDB_URL = // Your mongoDB uRL
  (mongoose.Promise = Promise);
mongoose.connect(mongoDB_URL);

mongoose.connection.on("error", (error: Error) =>
  console.log("mongoDB connection error:", error)
);
app.use("/", router());
