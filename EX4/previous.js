// Create a new element
const paragraph = document.createElement("p");
// Add content to the new element
paragraph.textContent = "This is my restaurant";

var Name = prompt("Enter your name :");
var gender = prompt("Enter your gender :");
var order = prompt("Enter your order shawarma, zinger, or burger ? :");

let orderlist = document.createElement("ol");

document.body.appendChild(paragraph);

document.body.appendChild(orderlist);



// Create a new element
const list1 = document.createElement("li");
const list2 = document.createElement("li");
const list3 = document.createElement("li");

orderlist.appendChild(list1);
orderlist.appendChild(list2);
orderlist.appendChild(list3);

list1.textContent = "Name:" + "  " + Name;
list2.textContent = "Gender:" + "  " + gender;
list3.textContent = "Your Order:" + "  " + order;

paragraph.style = "color:red; font-size:40px;";
