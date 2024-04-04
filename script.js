// pages
const loginPage = document.getElementById("login-page")
const fgtPwPage = document.getElementById("forgot-password-page")
const registerPage = document.getElementById("create-account-page")
const welcomePage = document.getElementById("welcome-page")

// inputs
// Login Page:
const emailInput = document.getElementById("email-input")
const passwordInput = document.getElementById("password-input")
// Recover PW Page:
const emailPwRecover = document.getElementById("email-pw-recover-input")
// Create account page:
const registerName = document.getElementById("reg-name-input")
const registerEmail = document.getElementById("reg-email-input")
const registerPw = document.getElementById("reg-pw-input")
const registerPwConfirmation = document.getElementById("reg-pw-confirm-input")

// Errors
// Login Page:
const emailErrorLogin = document.getElementById("log-email-error")
const pwErrorLogin = document.getElementById("log-pw-error")
// Create account page:
const emailErrorReg = document.getElementById("reg-email-error")
//password
const pwErrorReg = document.getElementById("reg-pw-error")
const digitErrorReg = document.getElementById("digit-error")
const uppercaseErrorReg = document.getElementById("upp-chrc-error")
const lowercaseErrorReg = document.getElementById("low-chrc-error")
const numberErrorReg = document.getElementById("numb-error")
const pwConfErrorReg = document.getElementById("conf-pw-error")


function login() {
    console.log(sessionStorage.getItem("name"));
    console.log(sessionStorage.getItem("email"));
    console.log(sessionStorage.getItem("password"));

    // Verify if email field is empty
    let email = emailInput.value
    if(email.match(/@/g) && email.match(/./g)) {
        emailErrorLogin.style.display = "none"
    } else {
        emailErrorLogin.style.display = "inherit"
    }
    
    let password = passwordInput.value
    if(password !== "") {
        pwErrorLogin.style.display = "none"
    } else {
        pwErrorLogin.style.display = "inherit"
    }
    
    
    if(email === sessionStorage.getItem("email") && password === sessionStorage.getItem("password")) {
        welcomePage.style.display = "flex"
        loginPage.style.display = "none"
        document.getElementById("userName").innerHTML = sessionStorage.get("name")
    }

}

function forgot() {
    loginPage.style.display = "none"
    fgtPwPage.style.display = "flex"
}

function toRegisterPage() {
    loginPage.style.display = "none"
    registerPage.style.display = "flex"
}

function toLoginPage() {
    loginPage.style.display = "flex"
    fgtPwPage.style.display = "none"
    registerPage.style.display = "none"
    welcomePage.style.display = "none"
}

function registerBtn() {
    let nameVerify = false
    let emailVerify = false
    let pwVerify = false
    let pwConfVerify = false

    // Verify if name field is empty
    if(registerName.value !== "") {
        registerName.style.border = "2px solid green"
        nameVerify = true
    } else {
        registerName.style.border = "1px solid red"
        nameVerify = false
    }
    
    // Verify if email field is empty
    let email = registerEmail.value.split("")
    if(email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
        registerEmail.style.border = "2px solid green"
        emailErrorReg.style.display = "none"
        emailVerify = true
    } else {
        registerEmail.style.border = "1px solid red"
        emailErrorReg.style.display = "inherit"
        emailVerify = false
    }

    let password = registerPw.value
    let digits = false
    let uppChrc = false
    let lowrChrc = false
    let number = false

    // Verify the password conditions
    if(password.length >= 8) {
        digitErrorReg.style.display = "none"
        digits = true
    } else {
        digitErrorReg.style.display = "inherit"
        digits = false
    }

    if(password.match(/[a-z]/g)) {
        lowercaseErrorReg.style.display = "none"
        lowrChrc = true
    } else{
        lowercaseErrorReg.style.display = "inherit"
        lowrChrc = false
    }

    if(password.match(/[A-Z]/g)) {
        uppercaseErrorReg.style.display = "none"
        uppChrc = true
    } else{
        uppercaseErrorReg.style.display = "inherit"
        uppChrc = false
    }

    if(password.match(/[0-9]/g)) {
        numberErrorReg.style.display = "none"
        number = true
    } else{
        numberErrorReg.style.display = "inherit"
        number = false
    }

    if(digits === false || uppChrc === false || lowrChrc === false || number === false) {
        pwErrorReg.style.display = "inherit"
        registerPw.style.border = "1px solid red"
        pwVerify = false
    } else {
        pwErrorReg.style.display = "none"
        registerPw.style.border = "2px solid green"
        pwVerify = true
    }


    if(password === registerPwConfirmation.value && registerPwConfirmation.value !== "") {
        registerPwConfirmation.style.border = "2px solid green"
        pwConfErrorReg.style.display = "none"
        pwConfVerify = true
    } else {
        registerPwConfirmation.style.border = "1px solid red"
        pwConfErrorReg.style.display = "inherit"
        pwConfVerify = false
    }


    if(nameVerify === true && emailVerify === true && pwVerify === true && pwConfVerify === true) {
        sessionStorage.setItem("name", registerName.value)
        sessionStorage.setItem("email", registerEmail.value)
        sessionStorage.setItem("password", registerPw.value)
        toLoginPage()
    }
}