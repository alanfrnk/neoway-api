const express = require('express')
const documentService = require('../services/documentService')

const router = express.Router()

router.get('/document/', documentService.getAll)

router.post('/document/', documentService.create)

router.get('/document/:id', documentService.get)

router.put('/document/:id', documentService.update)

router.delete('/document/:id', documentService.delete)

module.exports = router
