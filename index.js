// Constructor Fn
function AddressC(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const address1 = new AddressC(2, "Nagpur", 440038);
const address2 = new AddressC(2, "Nagpur", 440038);
let address3 = address2;

// address2.district = "nagpur";

function areSame(obj1, obj2) {
  return obj1 === obj2;
}

function areEqual(obj1, obj2) {
  let l1 = Object.keys(obj1);
  let l2 = Object.keys(obj2);
  for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
    if (obj1[l1[i]] !== obj2[l2[i]]) return false;
  }
  return true;
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address3, address2));
