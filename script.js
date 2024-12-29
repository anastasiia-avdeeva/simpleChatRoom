const userNameInput = document.getElementById("name-input");
const picLinkInput = document.getElementById("pic-input");
const msgInput = document.getElementById("msg-input");
const addBtn = document.getElementById("add-btn");
const toReplace = "***";

userNameInput.addEventListener("input", delWhiteSpaceInName);

function delWhiteSpaceInName() {
    let userName = userNameInput.value;
    userName = userName.replace(/\s/g, "");
    userNameInput.value = userName;
}

userNameInput.addEventListener("change", alterName);

function alterName() {
    let userName = userNameInput.value;
    userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
    userNameInput.value = userName;
}

msgInput.addEventListener("change", checkSpam); 

function checkSpam() {
    let msg = msgInput.value.trim();

    if (msg.match(/viagra/gi) !== null) {
        msg = msg.replace(/viagra/gi, toReplace);
    }

    if (msg.match(/xxx/gi) !== null) {
        msg = msg.replace(/xxx/gi, toReplace);
    }

    msgInput.value = msg;
}

