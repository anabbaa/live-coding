const { sign, verify } = require("jsonwebtoken");


const createToken = (user) => {
  const accessToken = sign(  // header already done by sign 

    { username: user.username, id: user._id }, // pass payload

    process.env.TOKEN_TEXT, // pass token

    {
      // in seconds 600s = 10 min
      expiresIn: 600,
    }
  );

  return accessToken;
};



  

const checkToken = async (req, res, next) => {
  // console.log(req.headers);
  
  const authHeader = req.headers["authorization"];
   const accessToken = authHeader && authHeader.split(" ")[1];
console.log(accessToken)
  // Bearer used for Auth2.0 which's a cryptic string
  // Take Bearer out
  
    if (accessToken == "null") {
      return res.json({ auth: false, message: "User NOT Authenticated!" });
    }
    try {
      const validToken = await verify(accessToken, process.env.TOKEN_TEXT);
      if (validToken) {
        // later as middleware
        // next();
        return res
          .status(200)
          .json({ auth: true, message: "User is Authenticated!" });
      } else {
        return res
          .status(404)
          .json({ auth: false, message: "You need to login!" });
      }
    } catch (err) {
      res.status(err.status).json({ auth: false, message: err.message });
    }
  };
  
  module.exports = { createToken, checkToken };
  