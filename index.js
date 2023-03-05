// Constructor Fn
function AddressC(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const Address1 = new AddressC(2, "Nagpur", 440038);
const Address2 = {
  street: 1,
  city: "Los Angeles",
  zipCode: 440028,
};

// Factory Function
function addressF(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const Address3 = addressF(3, "New York", 239818);

function Showaddress(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      console.log(key, obj[key]);
    }
  }
}
Showaddress(Address1);
Showaddress(Address2);
Showaddress(Address3);
