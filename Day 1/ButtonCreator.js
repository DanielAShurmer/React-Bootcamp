function subdoc() {
    let text = window.document.forms[0].elements[0].value;;
    let thisButton = document.createElement("button");
    thisButton.innerText = text;
    thisButton.setAttribute("type","button");
    window.document.forms[0].appendChild(thisButton);
}