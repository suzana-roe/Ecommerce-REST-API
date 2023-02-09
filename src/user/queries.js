const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE user_id = $1";
const checkNameExists = "SELECT u FROM users u WHERE u.first_name = $1";
const addUser = "INSERT INTO users (first_name) VALUES ($1)";
const removeUser = "DELETE FROM users WHERE user_id =$1";
const updateUser = "UPDATE users SET first_name=$1 WHERE user_id=$2";


module.exports = {
    getUsers,
    getUserById,
    checkNameExists,
    addUser,
    removeUser,
    updateUser,
};