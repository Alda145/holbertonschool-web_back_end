export default function getListStudentIds(getListStudents) {

    if (!Array.isArray(getListStudents)){
        return [];
    }else {
     const studentsId =  getListStudents.map((student)=>student.id) 
        return studentsId;
    }
    
}