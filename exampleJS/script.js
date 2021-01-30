var productSelect = prompt("Choose from the following: apple, orange, grape.");
var quanity = prompt("Enter the quanity");

var price1 = 50; 
var price2 = 70;
var price3 = 60;

var taxRate = .0825;

var product1 = "apple";
var product2 = "orange";
var product3 = "grape";


var totalPrice1 = price1 + (price1 * taxRate);
console.log(totalPrice1.toFixed(2));

var totalPrice2 = price2 + (price2 * taxRate);
console.log(totalPrice2.toFixed(2));

var totalPrice3 = price3 + (price3 * taxRate);
console.log(totalPrice3.toFixed(2));
