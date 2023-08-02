const express = require('express')
const { getHomepage, getNavbar, postCreateUser, getCreatePage } = require('../controllers/homeController')
const router = express.Router()

// router.Method('/route', handler)
router.get('/', getHomepage)
router.get('/navbar', getNavbar)
router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)

module.exports = router //export default