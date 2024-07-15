const express = require('express')
const router = express.Router()
const {drink, brounch}= require('../Controller/CommonController')


router.get('/drink',drink)
router.get('/brounch',brounch)

module.exports = router