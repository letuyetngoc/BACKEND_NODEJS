const { getAllUsers, getUserId, updateUserById, createUser, deleteUser } = require("../services/CRUDService")

const getHomepage = async (req, res) => {
    const results = await getAllUsers()
    // console.log('result', results)

    return res.render('home.ejs', { listUsers: results })
}

const getNavbar = (req, res) => {
    res.render('navbar.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getEditPage = async (req, res) => {
    let userId = await getUserId(req.params.id)
    userId = userId?.length > 0 ? userId[0] : {}
    res.render('edit.ejs', { userId: userId })
}

const getDeletePage = async (req, res) => {
    let userId = await getUserId(req.params.id)
    userId = userId?.length > 0 ? userId[0] : {}
    res.render('delete.ejs', { userId: userId })
}

const postCreateUser = async (req, res) => {
    let { email, username, city } = req.body
    // connection.query(
    //     `INSERT INTO 
    //     Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, username, city],
    //     function (err, results) {
    //         res.send('Create user success!')
    //         console.log(results);
    //     }
    // );

    await createUser(email, username, city)
    res.send('Create user success!')
}

const postDeleteUser = async (req, res) => {
    let { userId } = req.body
    await deleteUser(userId)
    res.redirect('/')
}

const postEditUser = async (req, res) => {
    let { email, username, city, userId } = req.body
    // connection.query(
    //     `UPDATE Users 
    //     SET email = ?, name = ?, city = ?  
    //     WHERE id = ?;`,
    //     [email, username, city],
    //     function (err, results) {
    //         res.send('Create user success!')
    //         console.log(results);
    //     }
    // );
    await updateUserById(email, username, city, userId)
    // res.send('Edit user success!')
    res.redirect('/')
}

module.exports = {
    getHomepage,
    getNavbar,
    postCreateUser,
    getCreatePage,
    getEditPage,
    postEditUser,
    getDeletePage,
    postDeleteUser
}