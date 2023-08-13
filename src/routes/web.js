const express = require('express')
const { getHomepage, getNavbar, postCreateUser, getCreatePage, getEditPage, postEditUser, getDeletePage, postDeleteUser } = require('../controllers/homeController')
const router = express.Router()

// router.Method('/route', handler)
router.get('/', getHomepage)
router.get('/navbar', getNavbar)
router.get('/create', getCreatePage)
router.get('/edit/:id', getEditPage)
router.post('/delete/:id', getDeletePage) //dùng tạm post, đúng ra thì dùng delete
router.post('/delete', postDeleteUser) //dùng tạm post, đúng ra thì dùng delete
router.post('/create-user', postCreateUser)
router.post('/update-user', postEditUser)

module.exports = router //export default