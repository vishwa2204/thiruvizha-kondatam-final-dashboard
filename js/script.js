// <!-- popup  -->


// Form Popup 

let popupBtn = document.querySelector('.add-lead');
let closeBtn = document.querySelector('#f-close');
let popup = document.querySelector('.model-section')
let deniedbtn = document.querySelector('.denied');
let closeDenied = document.querySelector('#denied-close');
let denied = document.querySelector('.denied-popu');
let confirmBtn = document.querySelector('.confirm-new');
let confirmBt = document.querySelector('.confirm-ne');
let closeConfirm = document.querySelector('#confirm-close');
let confirmed = document.querySelector('.confirmed-popu');



popupBtn.addEventListener("click", function () {
    // event.preventDefault();
    popup.style.scale = "1";
});
closeBtn.addEventListener("click", function (event) {

    denied.style.scale = "0";
    popup.style.scale = "0";
});


// Denied form 



deniedbtn.addEventListener("click", function () {
    // event.preventDefault();
    denied.style.scale = "1";
});

closeDenied.addEventListener("click", function (event) {
    event.preventDefault();
    denied.style.scale = "0";


});


// Confirmed Form Popup 

confirmBtn.addEventListener("click", function () {
    // event.preventDefault();
    confirmed.style.scale = "1";
});

closeConfirm.addEventListener("click", function (event) {
    event.preventDefault();
    confirmed.style.scale = "0";


});

// edit Form Popup 

confirmBt.addEventListener("click", function () {
    // event.preventDefault();
    confirmed.style.scale = "1";
});

closeConfirm.addEventListener("click", function (event) {
    event.preventDefault();
    confirmed.style.scale = "0";


});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Confirm Wedding 

// Get a reference to the checkbox element
let weddingBtn = document.querySelector('#wedding');
let wedding = document.querySelector('.wedding-popu');
let weddingClose = document.querySelector('#wedding-close');

// Add an onclick event handler to the checkbox
weddingBtn.onclick = function () {
    if (weddingBtn.checked) {
        // Set the value of the checkbox when it's checked
        wedding.style.scale = "1";
    } else {
        // Set the value of the checkbox when it's unchecked
        wedding.style.scale = "0";

    }
};

weddingClose.onclick = function (event) {
    event.preventDefault();

    wedding.style.scale = "0";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get a reference to the checkbox element
let preShootBtn = document.querySelector('#pre-post');
let preShoot = document.querySelector('.preshoot-popu');
let preShootClose = document.querySelector('#pre-close');

// Add an onclick event handler to the checkbox
preShootBtn.onclick = function () {
    if (preShootBtn.checked) {
        // Set the value of the checkbox when it's checked
        preShoot.style.scale = "1";
    } else {
        // Set the value of the checkbox when it's unchecked
        preShoot.style.scale = "0";

    }
};

preShootClose.onclick = function (event) {
    event.preventDefault();

    preShoot.style.scale = "0";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get a reference to the checkbox element
let engagementBtn = document.querySelector('#engagement');
let engagement = document.querySelector('.engagement-popu');
let engagementClose = document.querySelector('#engagement-close');

// Add an onclick event handler to the checkbox
engagementBtn.onclick = function () {
    if (engagementBtn.checked) {
        // Set the value of the checkbox when it's checked
        engagement.style.scale = "1";
    } else {
        // Set the value of the checkbox when it's unchecked
        engagement.style.scale = "0";

    }
};

engagementClose.onclick = function (event) {
    event.preventDefault();

    engagement.style.scale = "0";
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get a reference to the checkbox element
let partiesBtn = document.querySelector('#parties');
let parties = document.querySelector('.parties-popu');
let partiesClose = document.querySelector('#parties-close');

// Add an onclick event handler to the checkbox
partiesBtn.onclick = function () {
    if (partiesBtn.checked) {
        // Set the value of the checkbox when it's checked
        parties.style.scale = "1";
    } else {
        // Set the value of the checkbox when it's unchecked
        parties.style.scale = "0";

    }
};

partiesClose.onclick = function (event) {
    event.preventDefault();

    parties.style.scale = "0";
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get a reference to the checkbox element
let commercialBtn = document.querySelector('#commercial');
let commercial = document.querySelector('.commercial-popu');
let commercialClose = document.querySelector('#commercial-close');

// Add an onclick event handler to the checkbox
commercialBtn.onclick = function () {
    if (commercialBtn.checked) {
        // Set the value of the checkbox when it's checked
        commercial.style.scale = "1";
    } else {
        // Set the value of the checkbox when it's unchecked
        commercial.style.scale = "0";

    }
};

commercialClose.onclick = function (event) {
    event.preventDefault();

    commercial.style.scale = "0";
}


// Edit model /////////////////////

let editModelBtn = document.querySelector(".edit");
let editModel = document.querySelector(".edit-model-section");
let editClose = document.querySelector("#e-close");

editModelBtn.addEventListener("click", function () {
    // event.preventDefault();
    editModel.style.scale = "1";
});
editClose.addEventListener("click", function (event) {

    denied.style.scale = "0";
    editModel.style.scale = "0";
});
