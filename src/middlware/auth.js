const jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/config");

const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    try {
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "token invalid" });
    }
  } else {
    res.status(401).json({ error: "token missing" });
  }
  return;
};

module.exports = tokenExtractor;
