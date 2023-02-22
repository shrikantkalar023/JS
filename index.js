// 1=00000001 1 byte ig
// 2=00000010
// 3=00000011

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission & writePermission ? "YES" : "NO");
