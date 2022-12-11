import { developers } from "../list/webring .mjs";

const NList = [
    
];

// duplicate-elem
const dx = (arr) => {
  let index = 0;
  let nArr = [];
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
        nArr[index] = arr[i];
        index++;
      }
    }
  }
  return nArr;
};

// common-elem
const dex = (arr1, arr2) => {
  const ex = [];
  for (let i = 0; i < arr2.length; i++) {
    let a = arr1.indexOf(arr2[i]);
    if (a != -1) {
      ex.push(arr1[a]);
    } else {
    }
  }
  return ex;
};

const len = (arr) =>{
    return arr.length;
}

const debugPoint = (mainArr, arr) => {
    const dPoint = [];
    for(let i=0; i < arr.length; i++){
        dPoint.push(mainArr.indexOf(arr[i]));
    }
    return dPoint;
}

console.log("DevList: ", len(developers));
console.log("NList: ", len(NList));
console.log("ex: ", dex(developers, NList));
console.log("dPoint: ", debugPoint(developers,dex(developers, NList)));

