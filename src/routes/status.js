const express = require('express')
const statusService = require('../services/statusService')

const router = express.Router()

router.get('/status/', statusService.get)

module.exports = router
