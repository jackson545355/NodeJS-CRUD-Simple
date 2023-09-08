const express = require('express')
const studentRouter = express.Router()
studentRouter.use(express.json())

const {getStudentList,getIdStudents,addIdStudents,UpdateIdStudents,DeleteIdStudents} = require("../controllers/student.controllers")

studentRouter.get('', getStudentList)

//Get number of students id info
studentRouter.get('/:id', getIdStudents)

//add students id info
studentRouter.post('', addIdStudents)

//Update students id info
studentRouter.put('/:id', UpdateIdStudents)

//delete students id info
studentRouter.delete('/:id', DeleteIdStudents)

module.exports = studentRouter