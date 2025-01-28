import express from "express";
const app = express();
const port = process.env.PORT || 5000;
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";
// Gemini basic
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get("/prompt", async (req, res) => {
  const prompt = "Explain event emitters in JavaScript";
  const result = await model.generateContent(prompt);
  //   console.log(result.response.text());
  res.send({ data: result.response.text(), status: 200 });
});

// Basic setup
app.get("/", (req, res) => {
  res.send({ data: "Server running", status: 200 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
