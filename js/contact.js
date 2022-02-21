const form = document.querySelector("#contact-form");
const formUncomplete = document.querySelector(".form-uncomplete")
const fullName = document.querySelector("#name");
const nameErr = document.querySelector("#err-name");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#err-sub");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#err-email");


function valiForm(event) {
    event.preventDefault();
    if (checkForm(fullName.value, 1)) {
        nameErr.style.display = "none";
    } else {
        nameErr.style.display = "block";
    }
    if (checkForm(subject.value, 10)) {
        subjectErr.style.display = "none";
    } else {
        subjectErr.style.display = "block";
    }
    if (emailValidation(email.value)) {
        emailErr.style.display = "none";
    } else {
        emailErr.style.display = "block";
    }
    // level 2 når sendt ok 
    //return formUncomplete.innerHTML = `<h2>The form was sucessfuly sent</h2>`
}

form.addEventListener("submit", valiForm);

function checkForm(value, leng) {
    if (value.trim().length >= leng) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailMatche = regEx.test(email);
    return emailMatche;
}



//email - minimum length of 25
// subject - minimum length of 10
// name - required