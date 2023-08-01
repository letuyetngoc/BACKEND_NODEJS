const connection = require("../config/database")

const getHomepage = (req, res) => {
    //process data
    //call models
    return res.render('home.ejs')
}

const getNavbar = (req, res) => {
    res.render('navbar.ejs')
}

const postCreateUser = (req, res) => {

    let { email, username, city } = req.body
    console.log('req.body=======>', email, username, city)
    connection.query(
        `INSERT INTO 
        Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, username, city],
        function (err, results) {
            res.send('Create user success!')
            console.log(results);
        }
    );
}

module.exports = {
    getHomepage,
    getNavbar,
    postCreateUser
}