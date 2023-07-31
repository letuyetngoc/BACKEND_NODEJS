const express = require('express')
const { getHomepage, getNavbar, postCreateUser } = require('../controllers/homeController')
const router = express.Router()

// router.Method('/route', handler)
router.get('/', getHomepage)
router.get('/navbar', getNavbar)
router.post('/create-user', postCreateUser)

module.exports = router //export default