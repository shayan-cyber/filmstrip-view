
import express from 'express'
import fs from 'fs'
import cors from 'cors'
import path from 'path'
import dataRoute from "./routes/data/index.js";
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)
app.use(express.static('public'))

app.get("/", async (req, res) => {
  res.send("Heartbeat !");
});
app.use("/api/data", dataRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
