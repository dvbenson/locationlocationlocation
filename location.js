function updateRemoteStudents(array) {
let array2 = [];
let newArray = array2.concat(array);

for (const element of newArray) {
if (element.location === undefined) {
   element.location = 'remote';
   
  }
}
  return newArray;
  
}

module.exports = updateRemoteStudents;

