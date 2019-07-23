function subdoc() {
    console.log("PING!");
    let numA = window.document.forms[0].elements[0].value;
    let numB = window.document.forms[0].elements[1].value;
    console.log(numA);
    console.log(numB);
    let numC = parseInt(numA) + parseInt(numB);
    window.document.forms[0].elements[2].value = numC;
}