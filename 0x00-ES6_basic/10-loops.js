#!/usr/bin/node

export default function appendToEachArrayValue (array, appendString) {
    const arrayz = []
    for (const idx of array) {
      arrayz.push(appendString + idx)
    }
    return arrayz
  }
  