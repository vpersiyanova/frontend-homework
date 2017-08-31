'use strict';
const sorting = function(arrayOfObj, arrayOfProp) {
  function fsort(a, b) {
    if (typeof(a[currentProp]) != "number") {
      return a[currentProp].localeCompare(b[currentProp]);
    }
    return a[currentProp]-b[currentProp];
  };
  if (arrayOfProp.length == 0) return arrayOfObj;
  let currentProp = arrayOfProp[0];
  arrayOfObj.sort(fsort);
  let i = 1;
  while(i < arrayOfProp.length) {
    let previousProp = currentProp;
    currentProp = arrayOfProp[i];
    let delim = 0;
    for(let j = 1; j <= arrayOfObj.length; j++) {
      if (j == arrayOfObj.length || arrayOfObj[j-1][previousProp] != arrayOfObj[j][previousProp]) {
         let bufArr = arrayOfObj.slice(delim, j);
         if (bufArr.length != 1) {
           sorting(bufArr, [currentProp]);
         }
         for (let k = 0; k < bufArr.length; k++) {
            arrayOfObj.splice(delim + k, 1, bufArr[k]);
         }
         delim = j;
      }
    }
    i++;
  };
  return arrayOfObj;
};
