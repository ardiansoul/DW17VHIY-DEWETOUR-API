const jwt = require("jsonwebtoken");

exports.authenticated = (req, res, next) => {
  const token = req.header("x-access-token");
  if (!token) return res.status(401).send({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({ message: "invalid token" });
  }
};
