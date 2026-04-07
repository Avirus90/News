import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// ✅ Render ke liye dynamic port
const PORT = process.env.PORT || 5000;

// 🔑 Tumhara Newsdata API key
const API_KEY = "pub_6558ea3c8f294ac0ad2f7f86205c852c";

// 🏠 Home route (testing)
app.get("/", (req, res) => {
  res.send("🚀 OdiGyan Backend Running");
});

// 📰 News API route
app.get("/news", async (req, res) => {
  try {
    const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=in&language=en`;

    const response = await fetch(url);
    const data = await response.json();

    // ✅ Safe return
    if (!data || !data.results) {
      return res.json({ results: [] });
    }

    res.json(data);

  } catch (error) {
    console.error("❌ Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
