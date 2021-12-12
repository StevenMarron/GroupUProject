const fullname=document.getElementById("fullName")
const gender=document.getElementById("gender")
const address=document.getElementById("address")
const email=document.getElementById("email")
const check=document.getElementById("isPasswordValid")
const question=document.getElementById("question")

function isPasswordValid(password) {
 if (password.length > 5) {
 return true;
 }
 return false
 
}
function isPasswordValid(password) {
 if (password.length > 5) {
 return true;
 }
 return false
}
function isValid() {
 var valid = true;
 
 function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}
 
 valid &= fieldValidation(fields.fullName, isNotEmpty);
 valid &= fieldValidation(fields.gender, isNotEmpty);
 valid &= fieldValidation(fields.address, isNotEmpty);
 valid &= fieldValidation(fields.email, isEmail);
 valid &= fieldValidation(fields.password, isPasswordValid);
 valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
 valid &= fieldValidation(fields.question, isNotEmpty);
 valid &= arePasswordsEqual();

 return valid;
}

var fields={};
document.addEventListener("DOMContentLoaded", function() {
 fields.fullname = document.getElementById('fullname');
 fields.email = document.getElementById('email');
 fields.address = document.getElementById('address');
 fields.password = document.getElementById('password');
 fields.passwordCheck = document.getElementById('passwordCheck');
 fields.newsletter = document.getElementById('newsletter');
}
)
