
const jwt=require("jsonwebtoken")

module.exports = function checkauth(req, res, next) {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
      
    
            const token = req.header(tokenHeaderKey);
            if(jwt.verify(token, jwtSecretKey)){

      next();
    } else {

      res.send(401, "Unauthorized");
    }
  };