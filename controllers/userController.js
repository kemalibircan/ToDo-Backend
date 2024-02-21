const Pool = require('../models/dbConnector');
const queries = require('../statics/dbQuerys');


// Burada get isteği ile bütün kullanıcıları getiriyoruz.
const getUsers = async(req, res) => {
               Pool.query(queries.getAllUser, (error, results) => {
                 if (error) {
                   console.log(error);
                 } else {
                   res.status(200).json(results.rows);
                 }
               });
             };

//Burada yeni bir kullanıcı oluşturuyoruz.

const createUser = async(req,res) => {
               const { username} = req.body;
               console.log(req)
try {
               const { rows: existingUsers } = await Pool.query(queries.getUserByUsername, [username]);
               if (existingUsers.length) {
                 return res.status(200).json({ message: existingUsers});
               }
               else{
               const {rows : data} = await  Pool.query(queries.createUser, [username])
               return res.status(200).json({message : data})
               }
} catch (error) {
          console.log(error)     
}
               
               

}




             module.exports = { getUsers,createUser};
