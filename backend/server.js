import express from "express";
import PostSignUpRouter from "./routes/UserRouters/PostSignUpRouter.js";
import PostLoginRouter from "./routes/UserRouters/PostLoginRouter.js";
import cors from "cors";

import connectDb from "./config/db/db.js";
const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();
const port = 3000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", PostSignUpRouter);
app.use("/user", PostLoginRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
