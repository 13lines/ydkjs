var bank_account; // prompt for balance = 403.13;
const PHONE_PRICE = 88.00;
const TAX_RATE = .0875;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 308.00;
var phones = 0;
var accessories = 0;
var purchaseAmount = 0;
var strAmount = "";

function calculateTax(amount) {
    amount *= (1 + TAX_RATE);
    return amount;
}

function printPrice(total) {
    return "$" + total.toFixed(2);
}

var balance  = prompt ("Please enter your bank account balance:");

bank_account = Number(balance);

while (purchaseAmount < (bank_account - PHONE_PRICE)) {
     // buy phone
     phones ++;
     
     purchaseAmount += PHONE_PRICE;

     // Can we afford the additional accessory?     
     if (purchaseAmount < SPENDING_THRESHOLD) {
        purchaseAmount += ACCESSORY_PRICE;
        accessories ++;
     } else {
         break;
     }
}
          
// add tax
purchaseAmount = calculateTax(purchaseAmount);

//take money out of bank
bank_account -= purchaseAmount;
console.log (phones + " Phone(s) and " + accessories + " accessories purchased at a cost " + printPrice(purchaseAmount));
console.log ("Bank Balance: " + printPrice (bank_account));