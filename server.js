import express from "express";
import { connectMongoDb } from "./src/config/dbconfig.js";
import transactionRouter from "./src/routers/transactionRouter.js";
import authRouter from "./src/routers/authRouter.js";
import cors from "cors";

const app = express();
const PORT = 8000;

connectMongoDb();
app.use(cors());

app.use(express.json());
app.use("/api/v1/transactions", transactionRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
