const API_URL = "https://YOUR-RENDER-URL.onrender.com/news";

async function loadNews() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const container = document.getElementById("news");
    container.innerHTML = "";

    data.results.slice(0, 10).forEach(item => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description || "No description"}</p>
        <small>${item.pubDate}</small>
        <br>
        <a href="${item.link}" target="_blank">Read More</a>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    document.getElementById("news").innerText = "❌ Failed to load news";
  }
}

loadNews();
