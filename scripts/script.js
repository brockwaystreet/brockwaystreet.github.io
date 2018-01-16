
var formAddition;
var itemRequestsOption, generalOption, feedbackOption;
var formAdditionStatus;

function goHome()
{
    location.href = 'index.html';
}

function requestItems()
{
    localStorage.setItem("contactType", "requestItems");
}

function enterSlider(page)
{
    if(page == "home")
    {
        document.getElementById("left-swiper-arrow").className = "swiper-button-prev swiper-button-switch swiper-button-switch-solid";
        document.getElementById("right-swiper-arrow").className = "swiper-button-next swiper-button-switch swiper-button-switch-solid";
    }
}

function exitSlider(page)
{
    if(page == "home")
    {
        document.getElementById("left-swiper-arrow").className = "swiper-button-prev swiper-button-switch";
        document.getElementById("right-swiper-arrow").className = "swiper-button-next swiper-button-switch";
    }
}

function enterFocusCategory(focusType)
{
    if(focusType == "watches")
    {
        document.getElementById("focus-title-watches").className = "focus-title focus-title-hovered";
        document.getElementById("focus-button-watches").className = "col-centered focus-button-placement focus-button-hidden animated fadeInUp";
        document.getElementById("watches-dark").className = "row dark real-dark";
    }
    else if(focusType == "sunglasses")
    {
        document.getElementById("focus-title-sunglasses").className = "focus-title focus-title-hovered";
        document.getElementById("focus-button-sunglasses").className = "col-centered focus-button-placement focus-button-hidden animated fadeInUp";
        document.getElementById("sunglasses-dark").className = "row dark real-dark";
    }
}

function exitFocusCategory(focusType)
{
    if(focusType == "watches")
    {
        document.getElementById("focus-title-watches").className = "focus-title";
        document.getElementById("focus-button-watches").className = "col-centered focus-button-placement animated fadeOutDown";
        document.getElementById("watches-dark").className = "row dark";
    }
    else if(focusType == "sunglasses")
    {
        document.getElementById("focus-title-sunglasses").className = "focus-title";
        document.getElementById("focus-button-sunglasses").className = "col-centered focus-button-placement animated fadeOutDown";
        document.getElementById("sunglasses-dark").className = "row dark";
    }
}

function assignFormComponents()
{
    formAddition = document.getElementById("form-addition");
    itemRequestsOption = document.getElementById("item-request-option");
    generalOption = document.getElementById("general-option");
    feedbackOption = document.getElementById("feedback-option");

    if(localStorage.getItem("contactType") == "requestItems")
    {
        updateForm("itemRequests");
        localStorage.setItem("contactType", "general");
    } 
}

function updateForm(selection)
{
    if(selection == "itemRequests")
    {
        formAddition.innerHTML = '<label class = "form-header" for="exampleInputEmail1">Item Types Requested</label> <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Hats</span></label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Shirts</span>\</label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Shorts</span>\</label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Pants</span>\</label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Watches</span>\</label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Hoodies</span>\</label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Sweaters</span>\</label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Accessories</span>\</label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Other</span>\</label>';

        itemRequestsOption.className = "btn btn-primary outfit-button animated fadeIn delay1 selected-contact-option cell-button";
        generalOption.className = "btn btn-primary outfit-button animated fadeIn delay1 cell-button";
        feedbackOption.className = "btn btn-primary outfit-button animated fadeIn delay1 cell-button";

        document.getElementById("final-form-header").innerText = "Specific Item Requests";
        document.getElementById("final-form-message").placeholder = "Enter request";

        formAdditionStatus = "itemRequests";
    }
    else if(selection == "feedback")
    {
        formAddition.innerHTML = '<label class = "form-header" for="exampleInputEmail1">Feedback Type</label> <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Website suggestion</span></label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Issue/bug report</span></label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Questions</span></label>\
        <br /><label class="form-check-label">\
        <input class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Other</span></label>\
        <label class="form-check-label">';

        itemRequestsOption.className = "btn btn-primary outfit-button cell-button";
        generalOption.className = "btn btn-primary outfit-button cell-button";
        feedbackOption.className = "btn btn-primary outfit-button cell-button selected-contact-option";

        document.getElementById("final-form-header").innerText = "Your Feedback";
        document.getElementById("final-form-message").placeholder = "Enter feedback";

        formAdditionStatus = "feedback";
    }
    else if(selection == "general")
    {
        formAddition.innerHTML = '';
        document.getElementById("final-form-header").innerText = "Your Message";
        document.getElementById("final-form-message").placeholder = "Enter message";

        itemRequestsOption.className = "btn btn-primary outfit-button cell-button";
        generalOption.className = "btn btn-primary outfit-button cell-button selected-contact-option";
        feedbackOption.className = "btn btn-primary outfit-button cell-button";

        formAdditionStatus = "general";
    }
}

function closeMailingList()
{
    document.getElementById("mailing-list-panel").className = "col col-12 mailing-list-panel text-center animated fadeOutUp";
    document.getElementById("marginPush").className = "animateMarginTop margin-top-push-update";

    //document.getElementById("mailing-list-panel").remove();
}

function selectOwlColor(color)
{
    if(color == "green")
    {
        document.getElementById("owl-title").innerText = "Green Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468280782.png";
        document.getElementById("green-option").className = "color-option green-option active-border";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "yellow")
    {
        document.getElementById("owl-title").innerText = "Yellow Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468280824.png";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option active-border";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "blue")
    {
        document.getElementById("owl-title").innerText = "Blue Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468285797.png";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option active-border";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "orange")
    {
        document.getElementById("owl-title").innerText = "Orange Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468280907.png";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option active-border";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "brown")
    {
        document.getElementById("owl-title").innerText = "Cream/Brown Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/20160708-105925_orig.jpg";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option active-border";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "red")
    {
        document.getElementById("owl-title").innerText = "Red/Pink Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/20160708-122857_orig.jpg";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option active-border";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "purple")
    {
        document.getElementById("owl-title").innerText = "Purple Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468774373.png";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option active-border";
    }
}
