const connection = require("../config/database")

const getAllUsers = async () => {
    const [results, fields] = await connection.query('select * from Users')
    return results
}

const getUserId = async (userId) => {
    const [results, fields] = await connection.query('select * from Users WHERE id = ?', [userId])
    return results
}

module.exports = {
    getAllUsers,
    getUserId
}