const firstName = document.getElementById("firstName");
const errorFirstName = document.getElementById("firstName-error");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const sendButton = document.getElementById("sendBtn");
let check = false
let emailRegEx = /([a-zA-Z0-9//_//-//.]+)@([a-zA-Z)+]).(\D+)/;


function validateLength(e, name, minLength = 2) {
    const error = document.getElementById(`${e.target.id}-error`)

    if(e.target.value === "") {
        error.innerText =`Ett ${name.toLowerCase()} måste anges.`
        check = false
        console.log(check)   
    }

else {
    if(e.target.value.length < minLength) {
        error.innerText =`${name}et måste vara minst ${minLength} tecken.`
        check = false
        console.log(check)  
    }

    else {
        error.innerText = ""
        check = true
        console.log(check)
    }
}}


firstName.addEventListener("keyup", function(e){
    const name = "Förnamn"
    validateLength(e, name)
})
lastName.addEventListener("keyup", function(e){
    const name = "Efternamn"
    validateLength(e, name)
})