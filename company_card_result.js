'use strict';
const cardBasicStyle = document.querySelector(".company_card_result-body-show-card");
const showName = document.querySelector(".company_card_result-body-show-name");
const showCompanyName = document.querySelector(".company_card_result-body-show-companyName");
const showMail = document.querySelector(".company_card_result-body-show-mail");
const showPhone = document.querySelector(".company_card_result-body-show-phone");
const showCathphrase = document.querySelector(".company_card_result-body-show-catchphrase");

let recoverStoreData = {
    firstName: sessionStorage.getItem("storeDataFirstname"),
    surname: sessionStorage.getItem("storeDataSurname"),
    companyName: sessionStorage.getItem("storeDataCompanyName"),
    mail: sessionStorage.getItem("storeDataMail"),
    phone: sessionStorage.getItem("storeDataPhone"),
    catchphrase: sessionStorage.getItem("storeDataCatchphrase")
};

let recoverDesignStoreData = {
    backgroundColor: sessionStorage.getItem("storeDesignDataBackgroundcolor"),
    textColor: sessionStorage.getItem("storeDesignDataTextcolor")
};

function showCard() {
    cardBasicStyle.style.display = "flex";

    if (recoverDesignStoreData.backgroundColor === "Red") { cardBasicStyle.style.background = "#FF0000" } else
        if (recoverDesignStoreData.backgroundColor === "Green") { cardBasicStyle.style.background = "#088A08" } else
            if (recoverDesignStoreData.backgroundColor === "Blue") { cardBasicStyle.style.background = "#0000FF" } else
                if (recoverDesignStoreData.backgroundColor === "Yellow") { cardBasicStyle.style.background = "#FFFF00" } else
                    if (recoverDesignStoreData.backgroundColor === "Black") { cardBasicStyle.style.background = "#000000" } else { cardBasicStyle.style.background = "#ffffff" };

    if (recoverDesignStoreData.textColor === "Red") { cardBasicStyle.style.color = "#FF0000" } else
        if (recoverDesignStoreData.textColor === "Green") { cardBasicStyle.style.color = "#088A08" } else
            if (recoverDesignStoreData.textColor === "Blue") { cardBasicStyle.style.color = "#0000FF" } else
                if (recoverDesignStoreData.textColor === "Yellow") { cardBasicStyle.style.color = "#FFFF00" } else
                    if (recoverDesignStoreData.textColor === "Black") { cardBasicStyle.style.color = "#000000" } else { cardBasicStyle.style.color = "#ffffff" }
};

function showData() {
    showName.innerHTML = recoverStoreData.firstName + " " + recoverStoreData.surname;
    showCompanyName.innerHTML = recoverStoreData.companyName;
    showMail.innerHTML = "Mail: " + recoverStoreData.mail;
    showPhone.innerHTML = "Phone: " + recoverStoreData.phone;
    showCathphrase.innerHTML = recoverStoreData.catchphrase;
}

showCard();
showData();
console.log(recoverStoreData);
console.log(recoverDesignStoreData);