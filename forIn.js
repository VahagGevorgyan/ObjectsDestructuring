let arrKeys = [];
let arrValues = [];
let arrEntries = [];

function objectKeys(object) {
  for (let key in object) {
    arrKeys.push(key);
  }
  return arrKeys;
}

function objectValues(object) {
  for (let key in object) {
    arrValues.push(object[key]);
  }
  return arrValues;
}

function objectEntries(object) {
  for (let key in object) {
    arrEntries.push([key, object[key]]);
  }

  return arrEntries;
}
console.log(objectKeys({ a: 1, b: 2, c: 5 }));
console.log(objectValues({ a: 1, b: 2, c: 5 }));
console.log(objectEntries({ a: 1, b: 2, c: 5 }));
