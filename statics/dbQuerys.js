const getAllUser = "SELECT * FROM users;";
const getUserById = "SELECT * FROM users WHERE id = $1;";
const createUser = "INSERT INTO users (username) VALUES ($1) RETURNING*;"
const getUserByUsername = "SELECT * FROM users WHERE username = $1"
const getListById = "SELECT * FROM lists WHERE user_id = $1;"
const createListItem = "INSERT INTO lists (user_id, list_name, list_icon) VALUES ($1,$2,$3) RETURNING*;"
const deleteListItemById = "DELETE FROM lists WHERE list_id = $1";
const createTask = "INSERT INTO tasks (user_id,list_id,content) VALUES ($1,$2,$3) RETURNING*;"
const getTaskById = "SELECT * FROM tasks WHERE list_id = $1;"
const deleteTaskByItemId = "DELETE FROM tasks WHERE item_id = $1";
const editListById ="UPDATE lists SET list_name = $1 WHERE list_id = $2 RETURNING*";
module.exports={getAllUser,getUserById,createUser,getUserByUsername,
               getListById,createListItem,deleteListItemById,
               createTask,getTaskById,deleteTaskByItemId,editListById
}