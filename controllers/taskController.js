const Pool = require('../models/dbConnector');
const queries = require('../statics/dbQuerys');


// Burada get isteği ile bütün kullanıcıları getiriyoruz.
const getTaskById = async(req, res) => {
               const {list_id} = req.body
               Pool.query(queries.getTaskById,[list_id], (error, results) => {
                 if (error) {
                   console.log(error);
                 } else {
                  return res.status(200).json({message:results.rows});
                 }
               });
             };

//Burada yeni bir kullanıcı oluşturuyoruz.

const createTask = async(req,res) => {
               const {user_id,list_id,content} = req.body;
try {
                Pool.query(queries.createTask, [user_id,list_id,content],(error,results) => {
               if(error){
                              console.log(error)
               }else{
                           return res.status(200).json({message :results.rows[0]})
               }
               });
               
} catch (error) {
          console.log(error)     
}


}
const deleteTask = async(req, res) => {
               const {item_id} = req.body
               Pool.query(queries.deleteTaskByItemId,[item_id], (error, results) => {
                 if (results.rowCount == 1) {
                return res.status(200).json({message:"deleted"});
               } else if(results.rowCount == 0) {

                   return res.status(200).json({message:"bulunamadı"});
                 }
               });
             };

             module.exports = { createTask,getTaskById,deleteTask};
