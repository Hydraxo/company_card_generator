'use strict';
const inputColor = document.querySelector(".card_design-body-form_backgroundColorList");
const inputColorText = document.querySelector(".card_design-body-form_textColorList");
const inputCardDesignSend = document.querySelector(".card_design-body-form_input_send");

inputColor.addEventListener("click", gatherDesignData);
inputColorText.addEventListener("click", gatherDesignData);
inputCardDesignSend.addEventListener("click", cardDesignSend);

let storeDesignData = {
    backgroundColor: "",
    textColor:"",
};

function gatherDesignData (e){
    const manageDesign = e.target.name;
    const manageDesignValue = e.target.value;

    storeDesignData[manageDesign] = manageDesignValue;

    sessionStorage.setItem("storeDesignDataBackgroundcolor", storeDesignData.backgroundColor);
    sessionStorage.setItem("storeDesignDataTextcolor", storeDesignData.textColor);
}

function cardDesignSend (e){
    e.preventDefault();
    location.href = "company_card_result.html"
}
