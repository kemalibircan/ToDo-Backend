const Pool = require('../models/dbConnector');
const queries = require('../statics/dbQuerys');


// Burada get isteği ile bütün kullanıcıları getiriyoruz.
const getListById = async(req, res) => {
               const {user_id} = req.body
               Pool.query(queries.getListById,[user_id], (error, results) => {
                 if (error) {
                   console.log(error);
                 } else {
                  return res.status(200).json({message:results.rows});
                 }
               });
             };

//Burada yeni bir kullanıcı oluşturuyoruz.

const createList = async(req,res) => {
               const {user_id, list_name, list_icon} = req.body;
try {
                Pool.query(queries.createListItem, [user_id, list_name, list_icon],(error,results) => {
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


const deleteListItem = async(req, res) => {
               const {list_id} = req.body
               console.log(req)

               Pool.query(queries.deleteListItemById,[list_id], (error, results) => {
                 if (results.rowCount == 1) {
                return res.status(200).json({message:"deleted"});
               } else if(results.rowCount == 0) {
                   return res.status(200).json({message:"bulunamadı"});
                 }
               });
             };

             module.exports = { getListById,createList,deleteListItem};
