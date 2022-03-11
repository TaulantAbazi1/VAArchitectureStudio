//animacioni per overlay

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

//validimi per signup form

let signupBotton = document.getElementById("signup")
signupBotton.addEventListener('click', signup)

function signup(e) {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    alert("Fusha nuk duhet të jetë e zbrazët")
    if (name.length == '' || email.length == '' || password.length == '') {
        return false
    } else if (password.length < 8) {
        alert("Passwordi duhet të jetë të paktën 8 karaktere i gjatë")
    } else {
        if (email.match(mailformat)) {

            return true
        } else {
            alert("Formati i emailit është gabim")
            return false
        }
    }
    e.preventDefault()
}

//Validimi per signin form

let signinButton1 = document.getElementById("signin")
signinButton1.addEventListener('click', signin)

function signin(e) {
    let email = document.getElementById("email_1").value
    let password = document.getElementById("password_1").value
    if (email.length == '' || password.length == '') {
        alert("Fusha nuk duhet të jetë e zbrazët")
        return false
    } else if (password.length < 8) {
        alert("Passwordi duhet të jetë të paktën 8 karaktere i gjatë")
    } else {
        if (email.match(mailformat)) {

            return true
        } else {
            alert("Formati i emailit është gabim")
            return false
        }
    }
    e.preventDefault()
}