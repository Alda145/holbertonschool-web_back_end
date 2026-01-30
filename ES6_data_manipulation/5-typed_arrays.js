export default function createInt8TypedArray(length, position, value){
    if (value < -128 || value > 127) {
        throw new RangeError("Position outside range");
    }
    const myBuf = new ArrayBuffer(length);
    const view = new Uint8Array(myBuf);
    return 

}