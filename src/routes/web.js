const express = require('express')
const { getHomepage, getNavbar, postCreateUser, getCreatePage, getEditPage } = require('../controllers/homeController')
const router = express.Router()

// router.Method('/route', handler)
router.get('/', getHomepage)
router.get('/navbar', getNavbar)
router.get('/create', getCreatePage)
router.get('/edit/:id', getEditPage)

router.post('/create-user', postCreateUser)

module.exports = router //export default