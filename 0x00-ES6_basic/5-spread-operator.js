#!/usr/bin/node

export default function concatArrays(array1, array2, string) {
    const srt = [...array1,...array2,...string]
    return srt
}

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
