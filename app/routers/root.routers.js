const express = require('express')
const router = express.Router()
const studentRouter = require('./student.router')
router.use("/students",studentRouter)

module.exports = router