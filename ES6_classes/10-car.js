export default class Car {
    constructor(brand, motor, color){
        this._brand=brand
        this._motor=motor
        this._color=color
    }
    cloneCar(){
        // Creates a new object with the correct prototype chain (ParentClass, ChildClass, etc.)
        const newInstance = Object.create(Object.getPrototypeOf(this));
        // Copies own enumerable properties from 'this' to the new instance
        Object.assign(newInstance, this);
        return newInstance;
    }
}