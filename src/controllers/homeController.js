const connection = require("../config/database")
const { getAllUsers, getUserId } = require("../services/CRUDService")

const getHomepage = async (req, res) => {
    const results = await getAllUsers()
    // console.log('result', results)

    return res.render('home.ejs', {listUsers: results})
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
    res.render('edit.ejs', {userId: userId})
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

    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, username, city]
    )
    res.send('Create user success!')
}

module.exports = {
    getHomepage,
    getNavbar,
    postCreateUser,
    getCreatePage,
    getEditPage
}