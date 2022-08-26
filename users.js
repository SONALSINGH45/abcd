const jwt = require("jsonwebtoken");
const {con}=require("./db");
//const checkauth = require("../middlewere/checkauth")
const getallusers =async (req, res) => {
    con.query('SELECT * FROM users', (err, rows) => {
        if (!err){
            res.send(rows)
            return
        }
        else
            console.log(err);
    });
}
const getuserbyid= async (req,res)=>{
    con.query('SELECT * FROM users WHERE id=?', [req.params.id], (err, rows) => {
        if (!err)
            res.send(rows);
   else
   res.status(404).send("not found");
});

}
const deletebyid= async(req,res)=>{
    con.query('DELETE FROM users WHERE id=?', [req.params.id], (err) => {
        if (!err)
            res.send("DELETED");
        else
            res.status(404).send("not found");
    })
}

const updateuserbyid=async(req,res)=>{
    var id=req.params.id
    var passwor=req.body.passwor
    var email=req.body.email
    var first_name=req.body.first_name
    var last_name=req.body.last_name
    var address=req.body.address
    var date_of_birth=req.body.date_of_birth
    var  sql = `UPDATE users
           SET email="${email}",first_name="${first_name}",last_name="${last_name}",address="${address}",date_of_birth="${date_of_birth}"
           WHERE id = "${id}"`;
           con.query(sql, function(error, results) {
            if (error){
                res.status(404).send("not found");
            }
            console.log('Rows affected:', results.affectedRows);
          })
}
module.exports={getallusers,getuserbyid,deletebyid,updateuserbyid}