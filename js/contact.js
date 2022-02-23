const form = document.querySelector("#contact-form");
const formsucess = document.querySelector(".form-sucess")
const fullName = document.querySelector("#name");
const nameErr = document.querySelector("#err-name");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#err-sub");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#err-email");
const btnSubmit = document.querySelector(".submit-btn");

// required i html fungerer ikke sammen med javascript, den vil
// aktivere submit selv om du ikke har skrevet noe der, men får feil når du trykker
function valiForm() {
    if(checkForm(fullName.value, 1) && checkForm(subject.value, 9) && emailValidation(email.value)) {
        btnSubmit.disabled = false;
    } else {
        formsucess.innerHTML = "";
        btnSubmit.disabled = true;
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
