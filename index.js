const person = {
  firstName: "Shrikant",
  lastName: "Kalar",
  get fullname() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullname(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullname = "Ashwini Kalar";
console.log(person);

// getters=> access properties
// setters=> change (mutate) them
