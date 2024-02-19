const getAllUser = "SELECT * FROM users;";
const getUserById = "SELECT * FROM users WHERE id = $1;";
const createUser = "INSERT INTO users (username) VALUES ($1) RETURNING*;"
const getUserByUsername = "SELECT * FROM users WHERE username = $1"

module.exports={getAllUser,getUserById,createUser,getUserByUsername
}