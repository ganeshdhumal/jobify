const notFoundMiddleware = (req, res) =>
  res.status(400).send("Route does not found");

export default notFoundMiddleware;
