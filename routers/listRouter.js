const express = require("express") 
const {getListById,createList,deleteListItem, editList}  = require("../controllers/listController.js");

const router = express.Router();
router.post("/get",getListById)
router.post("/",createList)
router.post("/delete",deleteListItem)





module.exports = router