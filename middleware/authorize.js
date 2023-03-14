const jwt = require("jsonwebtoken");

const autorize = (req, res, next) => {
  const token = req.cookies.token;
  if(token){
    try {
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      res.redirect("/quiz")
    } catch (err) {
      res.clearCookie("token");
      next()
    }
  }else{
    next()
  }
}

module.exports = autorize