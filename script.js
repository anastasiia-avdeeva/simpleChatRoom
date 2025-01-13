const userNameInput = document.getElementById("name-input");
const picLinkInput = document.getElementById("pic-input");
const msgInput = document.getElementById("msg-input");
const addBtn = document.getElementById("add-btn");
const toReplace = "***";
const comments = document.getElementById("comments");

userNameInput.addEventListener("input", () => {
    userNameInput.value = delWhiteSpaceInName(userNameInput.value)
});

function delWhiteSpaceInName(input) {
    return input.trim().replace(/\s/g, "");
}

userNameInput.addEventListener("change", () => {
    userNameInput.value = alterName(userNameInput.value)
});

function alterName(input) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
}

msgInput.addEventListener("change", () => {
    msgInput.value = checkSpamAndReplace(msgInput.value);
}); 

function checkSpamAndReplace(input) {
    let msg = input.trim();
    msg = msg.replace(/viagra/gi, toReplace).replace(/xxx/gi, toReplace);

    return msg;
}


addBtn.addEventListener("click", checkAndPost);

function checkAndPost(evt) {
    evt.preventDefault(); 
    
    if (checkEmptyFields()) {
        alert("Пожалуйста, заполните все поля ввода");
        return;
    } 
    
    postComment();
}

function checkEmptyFields() {
    return userNameInput.value.trim() === "" || picLinkInput.value.trim() === "" || msgInput.value.trim() === ""
}

function postComment() {

    const mainContainer = createElemAddClass('div', 'comment');

    const imgContainer = createElemAddClass('div', 'comment__user-pic-container');

    const img = createElemAddClass('img', 'comment__user-pic');
    addSrcAltToImg(img, picLinkInput.value, `Аватарка юзера ${userNameInput.value}`)
    imgContainer.append(img);

    const h3Elem = createElemAddClass('h3', 'comment__user-name', userNameInput.value);

    const pElem = createElemAddClass('p', 'comment__user-msg', msgInput.value);

    mainContainer.append(imgContainer, h3Elem, pElem);

    delInformParagraph()

    comments.append(mainContainer);
    clearInput()

}

function createElemAddClass(elemName, className, textContentVal = undefined) {
    const newElem = document.createElement(elemName);
    newElem.classList.add(className);

    if (textContentVal !== undefined) {
        newElem.textContent = textContentVal;
    }
    return newElem;
}

function addSrcAltToImg(imgElem, src, alt) {
    imgElem.src = src;
    imgElem.alt = alt;
}

function delInformParagraph() {
    const informParagraph = document.querySelector(".comments__inform-paragraph");

    if (informParagraph !== null) {
        informParagraph.remove();
    }
}

function clearInput() {
    userNameInput.value = '';
    picLinkInput.value = '';
    msgInput.value = '';
}