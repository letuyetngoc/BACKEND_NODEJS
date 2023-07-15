
const getHomepage = (req, res) => {
    //process data
    //call models
    res.send('Hello word! vs Ngoc Le')
}

const getNavbar = (req, res) => {
    res.render('navbar.ejs')
}

module.exports = {
    getHomepage,
    getNavbar,
}