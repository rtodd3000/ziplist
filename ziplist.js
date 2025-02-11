"use strict";
function zipList(list1, list2) {
    const newList = [];
    if (!(list1.length === list2.length)) {
        console.log("Both lists need to be the same length");
        return [];
    }
    for (let i = 0; i < list1.length; i++) {
        newList.push(list1[i]);
        newList.push(list2[i]);
    }
    return newList;
}
function zipListTheFunctionalWay(list1, list2) {
    const result = [];
    list1.forEach((element, index) => {
        result.push(element, list2[index]);
    });
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
// console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
