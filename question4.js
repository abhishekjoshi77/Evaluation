function deepCopy(xyz) {
  if (typeof xyz !== 'object' || xyz === null) {
    return xyz; 
  }

  if (Array.isArray(xyz)) {
    return xyz.map(deepCopy); 

  const copiedObj = {};

  for (const key in xyz) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }

  return copiedObj;
}

const obj = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001
  }
};

const copy = deepCopy(obj);
console.log(copy);
// Output: { name: "John", address: { city: "New York", zip: 10001 } }

