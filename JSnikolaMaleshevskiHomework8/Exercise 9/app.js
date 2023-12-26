/**
 * Write a JavaScript programm called PhoneBook.
 *  You should have three input fields in the html, one for firstName, lastName and phoneNumber.
 *  After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs.
 *  Make sure the user is entering an appropriate values in the fields!


 Bonus: Add column with delete and edit button so that you can edit or delete a contact!
 Try to save the newly added contact as an object (literal or construcotr function its up to you) and add it to an array!
 */

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneNumberInput = document.getElementById("phoneNumber");
let button = document.getElementById("phoneNumber");
let table = document.getElementById("table");

function createContact(firstName, lastName, phoneNumber){
    let contact = `<tr><td>${firstName}</td><td>${lastName}</td><td>${phoneNumber}</td> <td><button>Edit</button></td><td><button>Delete</button></td></tr>`
    return contact
};

function addContact(){
    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    let phoneNumber = phoneNumberInput.value
    if(typeof(firstName) !== "string" || typeof(lastName) !== "string" || isNaN(parseFloat(phoneNumber))){
        console.log("INVALID INPUTS")
    } else{
    table.innerHTML += createContact(firstName, lastName, phoneNumber);
    }
}




