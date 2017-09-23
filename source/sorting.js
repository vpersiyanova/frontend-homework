'use strict';

const sorting = (arrayOfObj, arrayOfProp) => {
  let sortFunc = (a, b) => {
    if (a[previousProp] === b[previousProp]) {
      if (typeof(a[currentProp]) != "number") {
        return a[currentProp].localeCompare(b[currentProp]);
      }
      return a[currentProp] - b[currentProp];
    }
    return -1;
  }

  let currentProp, previousProp;

  arrayOfProp.forEach((property, i, arrayOfProp) => {
    currentProp = property;
    previousProp = arrayOfProp[i-1];
    arrayOfObj.sort(sortFunc);
  })
  return arrayOfObj;
}
