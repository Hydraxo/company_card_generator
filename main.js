'use strict';
const inputGetName = document.querySelector(".body-form_input_name");
const inputGetSurname = document.querySelector(".body-form_input_surname");
const inputGetCompanyName = document.querySelector(".body-form_input_companyName");
const inputGetMail = document.querySelector(".body-form_input_mail");
const inputGetPhone = document.querySelector(".body-form_input_phone");
const inputGetCatchphrase = document.querySelector(".body-form_input_catchphrase");
const inputGetSend = document.querySelector(".body-form_input_send");

inputGetName.addEventListener("keyup", gatherData);
inputGetSurname.addEventListener("keyup", gatherData);
inputGetCompanyName.addEventListener("keyup", gatherData);
inputGetMail.addEventListener("keyup", gatherData);
inputGetPhone.addEventListener("keyup", gatherData);
inputGetCatchphrase.addEventListener("keyup", gatherData);
inputGetSend.addEventListener("click", sendData);

let storeData = {
    firstName: "",
    surname: "",
    companyName: "",
    mail: "",
    phone: "",
    catchphrase: ""
};

function gatherData(e) {
    const manageName = e.target.name;
    const manageNameValue = e.target.value;

    storeData[manageName] = manageNameValue;
    sessionStorage.clear();
    sessionStorage.setItem("storeDataFirstname", storeData.firstName);
    sessionStorage.setItem("storeDataSurname", storeData.surname);
    sessionStorage.setItem("storeDataCompanyName", storeData.companyName);
    sessionStorage.setItem("storeDataMail", storeData.mail);
    sessionStorage.setItem("storeDataPhone", storeData.phone);
    sessionStorage.setItem("storeDataCatchphrase", storeData.catchphrase);
}

function sendData(e) {
    e.preventDefault();
    if ((inputGetName.value === "") || (inputGetSurname.value === "") || (inputGetCompanyName.value === "") || (inputGetMail.value === "") || (inputGetPhone.value === "")
    ) {
        alert("Please fill out all the fields");
    }
    else {
        location.href = "card_design.html"
    }
}


