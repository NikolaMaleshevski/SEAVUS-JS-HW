console.log("PHONE PRICE EXERCISE:");


let phoneAmount = 30;
console.log("Amount of phones:");
console.log(phoneAmount);


let phonePrice = 119.95;
console.log("The price of one phone is:");
console.log(phonePrice);


let taxValue = phonePrice / 20;
console.log("The added tax value for each phone is:");
console.log(taxValue);


let phonePriceWithTax = phonePrice + taxValue;


let checkoutPrice = phonePriceWithTax * phoneAmount;
console.log("The full price you will pay at checkout is:");
console.log(checkoutPrice);


console.log("**********************");
console.log("*********OR***********");
console.log("**********************");


console.log("Amount of phones:");
console.log(phoneAmount);


console.log("The price of one phone is:");
console.log(phonePrice);

let checkoutPriceV2 = phoneAmount * phonePrice;
console.log("The amount you will pay before tax is:");
console.log(checkoutPriceV2);

let taxValueV2 = checkoutPriceV2 / 20;
console.log("The added tax value for your purchase is:");
console.log(taxValueV2);

let checkoutPriceV2Taxed = checkoutPriceV2 + taxValueV2;
console.log("The full price you will pay at checkout is:");
console.log(checkoutPriceV2Taxed);
