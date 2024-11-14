let eASY = false;
let mEDIUM = false;
let hARD = false;
let sECURE = false;
function easy() {
    eASY = true;
}
function medium() {
    mEDIUM = true;
}
function hard() {
    hARD = true;
}
function secure() {
    sECURE = true;
}
let size = 10;
let password = "";
function Clear() {
    size=10;
    eASY = false;
    mEDIUM = false;
    hARD = false;
    sECURE = false;
    var input = document.getElementById("a");
    input.value = " ";
    password="";
}
function generate() {
    let lowerCASE = "abcdefghijklmnopqrstuvwxyz";
    let upperCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "1234567890"
    let symbol = "!@#$%^&*()_+-=";
    
    if (eASY) {
        while (size) {
            password += `${lowerCASE[Math.floor(Math.random() * lowerCASE.length)]}`;
            size--;
        }
    }
    else if (mEDIUM) {
        while (size) {
            let rand = Math.floor(Math.random() * 2);
            if ((rand == 1)) password += `${lowerCASE[Math.floor(Math.random() * lowerCASE.length)]}`;
            else password += `${upperCASE[Math.floor(Math.random() * upperCASE.length)]}`;
            size--;
        }

    }
    else if (hARD) {
        while (size) {
            let rand = Math.floor(Math.random() * 3);
            if ((rand == 1)) password += `${lowerCASE[Math.floor(Math.random() * lowerCASE.length)]}`;
            else if (rand == 2) password += `${upperCASE[Math.floor(Math.random() * upperCASE.length)]}`;
            else password += `${number[Math.floor(Math.random() * number.length)]}`;
            size--;
        }

    }
    else {
        while (size) {
            let rand = Math.floor(Math.random() * 4);
            if ((rand == 1)) password += `${lowerCASE[Math.floor(Math.random() * lowerCASE.length)]}`;
            else if (rand == 2) password += `${upperCASE[Math.floor(Math.random() * upperCASE.length)]}`;
            else if (rand == 3) password += `${number[Math.floor(Math.random() * number.length)]}`;
            else password += `${symbol[Math.floor(Math.random() * symbol.length)]}`;
            size--;
        }
    }
    var input = document.getElementById("a");
    input.value = password;
    eASY = false;
    mEDIUM = false;
    hARD = false;
    sECURE = false;
}
