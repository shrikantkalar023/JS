// With switch case , we can compare value of a var
// against a bunch of other values

let role = "moderator";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}
