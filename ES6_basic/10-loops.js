export default function appendToEachArrayValue(array, appendString) {
  let message = '';
  const myArray = [];
  for (const el of array) {
    message = appendString + el;
    myArray.push(message);
  }
  return myArray;
}
