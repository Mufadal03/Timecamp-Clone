const jwt = require("jsonwebtoken");
require("dotenv").config();
const Authentication = (req, res, next) => {
  if (!req.headers.authorization) return res.send({ msg: "Please Login" });
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    if (err) return res.send({ msg: "Please Login!!" });
    else {
      const { userId, email } = decoded;
      req.body.userId = userId;
      req.body.email = email;
      next();
    }
  });
};

module.exports = { Authentication };
