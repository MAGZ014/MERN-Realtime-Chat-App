import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv/config";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(
    `Server is runnig on port: ${PORT}. access http://localhost:${PORT}`
  );
  connectDB();
});
