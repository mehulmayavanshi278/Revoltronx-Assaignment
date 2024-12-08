module.exports = (app) => {
    // Example API route
    app.post("/api/data", async (req, res) => {
      const { name } = req.body;
  
      if (!name) {
        return res.status(400).json({ error: "Name is required" });
      }
  
      // Example response
      res.json({ message: `Hello, ${name}` });
    });
  };
  