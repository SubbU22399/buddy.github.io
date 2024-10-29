import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const databaseURL = process.env.DATABASEURL;

const server = app.listen(port, () => {
  console.log(`server listening to port at http://localhost:${port}`);
});
