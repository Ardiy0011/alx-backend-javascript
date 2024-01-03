#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
    let arrayz = [];
    for (let idx of array) {
        arrayz.push(appendString + idx);
    }
    return arrayz;
  }
