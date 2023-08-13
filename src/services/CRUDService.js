const connection = require("../config/database")

const getAllUsers = async () => {
    const [results, fields] = await connection.query('select * from Users')
    return results
}

const getUserId = async (userId) => {
    const [results, fields] = await connection.query('select * from Users WHERE id = ?', [userId])
    return results
}

const createUser = async () => {
    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, username, city]
    )
}

const deleteUser = async (userId) => {
    const [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [userId]
    )
}

const updateUserById = async (email, username, city, userId) => {
    const [results, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ?  WHERE id = ? ;`, [email, username, city, userId]
    )
}

module.exports = {
    getAllUsers,
    getUserId,
    updateUserById,
    createUser,
    deleteUser
}