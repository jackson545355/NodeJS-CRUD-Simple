const {getList,getInfoStudents,addInfoStudents,UpdateStudents,DeleteStudents} = require("../services/student.services")

const getStudentList = (req, res) => {
    const studentLists = getList()
    if(studentLists){
        res.status(200).send(studentLists)
    }else{
        res.status(404).send("NOT FOUND!")
    }
}

const getIdStudents = (req, res) => {
    const students = getInfoStudents(req)
    if(students){
        res.status(200).send(students)
    }else{
        res.status(404).send("NOT FOUND!")
    }
}

const addIdStudents = (req, res) => {
    const{fullName,age,numberClass} = req.body
    let student = addInfoStudents(fullName,age,numberClass)
    res.status(201).send(student)
}

const UpdateIdStudents = (req, res) => {
    const { id } = req.params
    const { fullName, age, numberClass } = req.body
    let student = UpdateStudents(id,fullName, age, numberClass)
    if (student) {
        res.status(200).send(student)
    } else {
        res.status(404).send("Not found!")
    }
}

const DeleteIdStudents = (req, res) => {
    const { id } = req.params
    const student = DeleteStudents(id)
    if (student) {
        res.status(200).send(student)
    } else {
        res.status(404).send("Not found!")
    }
}

module.exports = {
    getStudentList,
    getIdStudents,
    addIdStudents,
    UpdateIdStudents,
    DeleteIdStudents
}