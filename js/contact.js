const form = document.querySelector("#contact-form");
const formsucess = document.querySelector(".form-sucess")
const fullName = document.querySelector("#name");
const nameErr = document.querySelector("#err-name");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#err-sub");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#err-email");
const btn = document.querySelector("button");


function valiForm(event) {
    if(checkForm(fullName.value, 0) && checkForm(subject.value, 9) && emailValidation(email.value)) {
        btn.disabled = false;
    } else {
        formsucess.innerHTML = "";
        btn.disabled = true;
    }
}
fullName.addEventListener("keyup", valiForm);
subject.addEventListener("keyup", valiForm);
email.addEventListener("keyup", valiForm);

function submitForm(event) {
    event.preventDefault();
    formsucess.innerHTML = `<h3 class="ok">The form has been sent</h3>`;
    form.reset();

}

form.addEventListener("submit", submitForm);

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