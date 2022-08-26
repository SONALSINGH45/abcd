const jwt = require("jsonwebtoken");
const {con}=require("./db");
const signup = async (req, res) => {
  let data = {
    passwor: req.body.passwor,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    date_of_birth: req.body.date_of_birth,
  };
  con.query(
    "INSERT INTO users (passwor,email,first_name,last_name,address,date_of_birth) VALUES  (? ,? ,?,?,?,?)",
    [
      data.passwor,
      data.email,
      data.first_name,
      data.last_name,
      data.address,
      data.date_of_birth,
    ],
    (error, _results) => {
      if (error) return res.json({ error: error });
    }
  );
  res.send("signup done!!!!!");
};
const login = async (req, res) => {
  var email = req.body.email;
  //console.log(req)
  var passwor = req.body.passwor;
  con.query(
    "select * from users where email=? and passwor=?",
    [email, passwor],
    function (error, results) {
      if (error) {
        return error;
      }
      console.log(results);
      if (results.length > 0) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
          passwor: req.body.passwor,
          email: req.body.email,
        };
        const token = jwt.sign(data, jwtSecretKey);
        res.status(200).send({
          msg: "data saved",
          key: token,
          payload: results,
          status: 200,
        });
      } else {
        res.status(401).send();
      }
    }
  );
};

//}

module.exports = {
  signup,
  login,
};


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmFsQGdtYWlsLmNvbSIsImlhdCI6MTY2MTMzNjU0M30.bgGk1d1a7Pm0ItvmvPHutVtc6RPq4CqVR_6MRfHvoUE
