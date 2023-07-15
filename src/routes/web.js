const express = require('express')
const { getHomepage, getNavbar } = require('../controllers/homeController')
const router = express.Router()

// router.Method('/route', handler)
router.get('/', getHomepage)
router.get('/navbar', getNavbar)

module.exports = router //export default