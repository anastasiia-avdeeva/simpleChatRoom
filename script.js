const userNameInput = document.getElementById("name-input");
const picLinkInput = document.getElementById("pic-input");
const msgInput = document.getElementById("msg-input");
const addBtn = document.getElementById("add-btn");
const toReplace = "***";
const comments = document.getElementById("comments");

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

addBtn.addEventListener("click", postComment);

function postComment(evt) {
    evt.preventDefault(); 

    const imgContainerElem = document.createElement('div');
    imgContainerElem.classList.add('comment__user-pic-container');

    const img = document.createElement('img');
    img.classList.add('comment__user-pic');
    img.src = picLinkInput.value;
    img.alt = `Аватарка юзера ${userNameInput.value}`;
    imgContainerElem.append(img);

    const h3Elem = document.createElement('h3');
    h3Elem.classList.add('comment__user-name');
    h3Elem.textContent = userNameInput.value;

    const pElem = document.createElement('p');
    pElem.classList.add('comment__user-comment')
    pElem.textContent = msgInput.value;

    const container = document.createElement('div');
    container.classList.add('comment');

    container.append(imgContainerElem, h3Elem, pElem);

    const informParagraph = document.querySelector(".comments__inform-paragraph");

    if (informParagraph !== null) {
        informParagraph.remove();
    }
    
    comments.append(container);
    clearInput()
}

function clearInput() {
    userNameInput.value = '';
    picLinkInput.value = '';
    msgInput.value = '';

}