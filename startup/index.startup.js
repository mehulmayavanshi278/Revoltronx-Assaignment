module.exports = async(server) => {
    await require("./db.startup")(); // MongoDB connection
    require("./routes.startup")(server); // Load routes
    server.listen(3000, () => console.log(`Server running at http://localhost:${3000}`));
  };
  