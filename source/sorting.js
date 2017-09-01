'use strict';

const sorting = function(arrayOfObj, arrayOfProp) {

  let propSort = () => {
    let delim = 0;

    for(let j = 1; j <= arrayOfObj.length; j++) {
      if (j === arrayOfObj.length || arrayOfObj[j-1][previousProp] != arrayOfObj[j][previousProp]) {
         let bufArr = arrayOfObj.slice(delim, j);
         if (bufArr.length != 1) {
           sorting(bufArr, [currentProp]);
         }
         bufArr.forEach(function(item, i, bufArr){
            arrayOfObj.splice(delim + i, 1, item);
         });
         delim = j;
      }
    }
  }

  if (arrayOfProp.length === 0) {
    return arrayOfObj;
  }
  let currentProp = arrayOfProp[0];

  arrayOfObj.sort(function (a, b) {
    if (typeof(a[currentProp]) != "number") {
      return a[currentProp].localeCompare(b[currentProp]);
    }
    return a[currentProp] - b[currentProp];
  });

  let previousProp = currentProp;
  arrayOfProp.shift();
  currentProp = arrayOfProp[0];

  arrayOfProp.forEach(propSort);

  return arrayOfObj;
};
