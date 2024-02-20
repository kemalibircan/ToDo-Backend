const express = require("express") 
const {createTask, getTaskById, deleteTask}  = require("../controllers/taskController");

const router = express.Router();
router.post("/create",createTask)
router.post("/get",getTaskById)
router.post("/delete",deleteTask)




module.exports = router