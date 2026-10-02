import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "MoticH backend is running.",
  });
});

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`MoticH backend listening on http://localhost:${PORT}`);
});
