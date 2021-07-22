import express from "express";
import dotenv from "dotenv";
import DB_CONNECT from "./config/db.js";
import router from "./routes/routes.js";

const app = express();

dotenv.config({ path: "config/config.env" });

DB_CONNECT();

app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
