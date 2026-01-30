export default function getStudentsByLocation(getListStudents, city) {
    const studentsFilter = getListStudents.filter((student)=> student.location == city)
    return studentsFilter;

}