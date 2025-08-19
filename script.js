const passwordBox = document.getElementById("Password");
const length = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|{}[]<>/-=";
const allChars = UpperCase + LowerCase + numbers + symbols;

function createPassword(){
    let password = "";
    password += UpperCase[Math.floor(Math.random()*UpperCase.length)];
    password += LowerCase[Math.floor(Math.random()*LowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}