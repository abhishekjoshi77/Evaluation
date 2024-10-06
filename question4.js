function deepCopy(xyz) {
  if (typeof xyz !== 'object' || xyz === null) {
    return xyz; // primitive values or null can be returned as is
  }

  if (Array.isArray(xyz)) {
    return xyz.map(deepCopy); // recursively copy each element in the array
  }

  const copiedObj = {};

  for (const key in xyz) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copiedObj[key] = deepCopy(obj[key]); // recursively copy each property
    }
  }

  return copiedObj;
}
