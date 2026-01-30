export default function getStudentIdsSum(getListStudents){
    const initialValue = 0;
    //array.reduce((accumulator, current) => rezultat, vleraFillestare);
    const result = getListStudents.reduce((sum, sudentId) => sum + sudentId.id, initialValue)
    return result;
}