export default class HolbertonCourse {

    constructer(name, length, students) {

        if (typeof name )
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name
    }
    get length() {
        return this._length
    }
    get students() {
        return this._students
    }
    
    set name (name){
        if (typeof name !== 'string') {
            throw new Error('Name must be a string.');
        }
      this._name = name;
    }
    set length(length) {
        if (typeof length !== 'number') {
            throw new Error('Name must be a number.');
        }

        this._length = length;
    }
    set students(students) {
        if (!Array.isArray(students)) {
            throw new Error('Students must be a Array.');
        }
        for (let items of students ){
            if (typeof items!=="string" ){
                throw new Error('Name must be a string.');
            }
        }
        this._students = students;
    }
}