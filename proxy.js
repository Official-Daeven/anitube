export default async function handler(req, res) {
  const { url } = req.query; // take ?url= from request
  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  try {
    const response = await fetch(url);
    const data = await response.text();

    // Add CORS headers so browser accepts it
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}