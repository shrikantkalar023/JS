// try and catch. Error handling.
const person = {
  firstName: "Shrikant",
  lastName: "Kalar",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("Value is not a string");
    }
    const parts = value.split(" ");
    if (parts.length != 2) {
      throw new Error("Enter a first and last name.");
    }
    // lines after throw are not run if error is caught.
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "";
} catch (e) {
  // console.log(e);
  alert(e); //alert is old way. Use red label here instead.
}

console.log(person);

// throwing an error makes it exception.
