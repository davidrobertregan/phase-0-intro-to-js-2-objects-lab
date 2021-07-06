// Write your solution in this file!
const employee = {
    name: 'Dave',
    streetAdress: 'Cambridge BLVD',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value});
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = Object.assign({}, obj)
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj
}