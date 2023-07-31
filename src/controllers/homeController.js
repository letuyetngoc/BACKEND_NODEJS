
const getHomepage = (req, res) => {
    //process data
    //call models
    return res.render('home.ejs')
}

const getNavbar = (req, res) => {
    res.render('navbar.ejs')
}

const postCreateUser = (req, res) => {
    console.log('req.body=======>', req.body)
    res.send('Create user')
}

module.exports = {
    getHomepage,
    getNavbar,
    postCreateUser
}