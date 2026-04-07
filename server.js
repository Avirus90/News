import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const API_KEY = "pub_6558ea3c8f294ac0ad2f7f86205c852c";

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 OdiGyan Backend Running");
});

// News route
app.get("/news", async (req, res) => {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=in&language=en`
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
