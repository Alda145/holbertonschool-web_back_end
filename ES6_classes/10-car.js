export default class Car {
    constructer(brand, motor, color){
        this._brand=brand
        this._motor=motor
        this._color=color
    }
    cloneCar(){

        return new Car() 
    }
}