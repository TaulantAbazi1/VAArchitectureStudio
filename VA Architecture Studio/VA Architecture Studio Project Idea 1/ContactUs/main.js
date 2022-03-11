const form = document.getElementById("contact-form"),
    fName = document.getElementById("fname"),
    lName = document.getElementById("lname"),
    email = document.getElementById("email"),
    selCountry = document.getElementById("country"),
    textArea = document.getElementById("subject"),
    allInputs = document.querySelectorAll("#contact-form .an-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    allInputs.forEach((one) => {
        if (one.value.trim().length < 3) {
            one.classList.add("alert-req");
            one.nextElementSibling.classList.add("req-mes");

            setTimeout(() => {
                one.classList.remove("alert-req");
                one.nextElementSibling.classList.remove("req-mes");
            }, 2000);
        } else if (one.id === "email") {
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (!re.test(one.value)) {
                one.classList.add("alert-req");
                one.nextElementSibling.classList.add("req-mes");

                setTimeout(() => {
                    one.classList.remove("alert-req");
                    one.nextElementSibling.classList.remove("req-mes");
                }, 1000);
            }
        } else {
            console.log("Message sent");
        }
    });
});