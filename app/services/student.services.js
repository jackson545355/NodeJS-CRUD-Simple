let studentLists = [
    {
        id: 1,
        fullName: "Phùng Lê Khánh Trình",
        age: 21,
        numberClass: 15
    },
    {
        id: 2,
        fullName: "Đoàn Khánh Vi",
        age: 21,
        numberClass: 14
    },
    {
        id: 3,
        fullName: "Phùng Lê Ngọc Diệp",
        age: 14,
        numberClass: 9
    },
]

const getList = () =>{
    if(studentLists){
        return studentLists
    }else{
        return false
    }
}

const getInfoStudents = (req) =>{
    const { id } = req.params
    const index = studentLists.findIndex((students) => {
        return students.id == id
    })

    if (index != -1) {
        const students = studentLists[index]
        return students
    } else {
        return false
    }
}

const addInfoStudents = (fullName, age, numberClass) =>{
    const newStudents = {
        id: studentLists.length + 1,
        fullName,
        age,
        numberClass
    }
    studentLists = [...studentLists, newStudents];
    return studentLists
}

const UpdateStudents = (id,fullName, age, numberClass)=>{
    const index = studentLists.findIndex((student) => student.id.toString() === id)
    if (index != -1) {
        const update_info = { ...studentLists[index], fullName, age, numberClass }
        studentLists[index] = update_info
        return update_info
    } else {
        return false
    }
}

const DeleteStudents =(id) =>{
    const index = studentLists.findIndex((students) => students.id.toString() === id)
    if (index != -1) {
        const student = studentLists[index]
        studentLists.splice(index, 1)
        return student
    } else {
        return false
    }
}

module.exports = {
    getList,
    getInfoStudents,
    addInfoStudents,
    UpdateStudents,
    DeleteStudents
}