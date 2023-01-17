const input = document.querySelector("input");
const errorMsg = document.querySelector("#error-message");
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const subscribeBtn = document.querySelector("#subscribe")

//Events
input.addEventListener("keyup", checker);

subscribeBtn.addEventListener("click", subscribeEmail)


//Functions
function checker() {

    if (input.value.match(mailRegex)) {
        errorMsg.className = ""
        input.className = "success"
    }
    else if (input.value == "") {
        errorMsg.className = ""
        input.className = ""
    }
    else {
        errorMsg.className = ""
        errorMsg.classList.add("display-block-invalid")
        errorMsg.innerHTML = "Check your email please"
        input.className = "invalid"
    }

}

function subscribeEmail() {
    errorMsg.className = "";
    errorMsg.innerHTML = ""

    if (input.className === "success") {
        input.value = ""
        input.className = ""
        errorMsg.classList.add("display-block-success")
        errorMsg.innerHTML = "Success! Thank You!"
    } else {
        errorMsg.className = ""
        errorMsg.classList.add("display-block-invalid")
        errorMsg.innerHTML = "Check your email please"
        input.className = "invalid"

    }
}


