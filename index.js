
// Write your solution in this file!
const employee = {
    name: "Trackson Oluoch",
    streetAddress: "11th street 95 Alley-Nairobi"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj ={...employee};
    newObj[key]= value;

    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee={...employee}
    delete newEmployee.name;
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}