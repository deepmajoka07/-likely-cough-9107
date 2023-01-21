let email = document.getElementById("email");
let emailError = document.getElementById("emailError");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let NameError = document.getElementById("NameError");

let Add_1 = document.getElementById("Add_1");
let Add_1Error = document.getElementById("Add_1Error");

let Add_2 = document.getElementById("Add_2");
let Add_2Error = document.getElementById("Add_2Error");

let city = document.getElementById("city");
let state = document.getElementById("state");
let stateError = document.getElementById("stateError");

let zipCode = document.getElementById("zipCodeVal");
let ZipError = document.getElementById("ZipError");

let number = document.getElementById("Number");
let numberError = document.getElementById("numberError");

let checkout = document.getElementById("guestcheckout");

let message = document.getElementById("message");

let cartData = JSON.parse(localStorage.getItem("cartData")) || []




checkout.addEventListener("click", () => {
    let allFillData = true;
    if (email.value == "") {
        emailError.innerText = "Please Enter the Email"
        allFillData = false;
        console.log(1)
    } else {
        emailError.innerText = "";

    }

    if (firstName.value == "" || lastName.value == "") {
        NameError.innerText = "Please Enter Your first and laste name"
        allFillData = false;
    } else {
        NameError.innerText = "";

    }

    if (Add_1.value == "") {
        Add_1Error.innerText = "Please Enter Your Address"
        allFillData = false;
    } else {
        Add_1Error.innerText = ""

    }

    if (city.value == "" || state.value == "") {
        allFillData = false;
        stateError.innerText = "Please Enter state & city name"
    } else {
        stateError.innerText = ""

    }

    if (zipCode.value == "") {
        ZipError.innerText = "Please Enter Zip Code"
        allFillData = false;
    } else {
        ZipError.innerText = "";

    }

    if (number.value == "") {
        numberError.innerText = "Please Enter Your Mobile No."
        allFillData = false;
    } else {
        numberError.innerText = ""

    }

    let n = number.value.length
    if (n <= 12 && n >= 10) {
        numberError.innerText = ""
    } else {
        numberError.innerText = "Please Enter Correct Mobile No."
        allFillData = false;
    }

    if (allFillData) {
        let date = new Date()
        let obj = {
            cart_data: cartData,
            Name: `${firstName.value} ${lastName.value}`,
            Email_Id: email.value,
            Mob_No: number.value,
            Address: Add_1.value,
            Order_Id: Math.floor(100000 + Math.random() * 100000),
            Date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        }
        updateOrderApi(obj);
        message.innerText = "Order Placed Successfully"
        message.style.display = "block";

        setTimeout(() => {
            message.style.display = "none";
            window.location.href = "./product.html"
        }, 1200)

    } else (
        alert("missing")
    )
})

function updateOrderApi(obj) {
    fetch("https://colambia-api.onrender.com/Orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)

    })
}
