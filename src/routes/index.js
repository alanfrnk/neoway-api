const express = require('express')
const router = express.Router();

const documentRoutes = require('./document')
const statusRoutes = require('./status')

router.use(documentRoutes);
router.use(statusRoutes);

module.exports = router
