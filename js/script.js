const submit_action = document.getElementById("submit_btn");
const first_Name = document.querySelector('input[name="firstName"]');
const last_Name = document.querySelector('input[name="lastName"]');
const email_Input = document.querySelector('input[type="email"]');
const generalCheck = document.getElementById("general");
const supportCheck = document.getElementById("support");
const generalInput = document.getElementById("generalInput");
const supportInput = document.getElementById("supportInput");
const messageTextarea = document.getElementById("message");
const agreeCheckBox = document.getElementById("agree");
const success_alert = document.getElementById("success_alert");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");
const error5 = document.getElementById("error5");
const error6 = document.getElementById("error6");

error1.style.display = "none";
error2.style.display = "none";
error3.style.display = "none";
error4.style.display = "none";
error5.style.display = "none";
error6.style.display = "none";

submit_action.addEventListener("click", (event) => {
  event.preventDefault();

  if (first_Name.value == "") {
    error1.style.display = "block";
    first_Name.style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    error1.style.display = "none";
    first_Name.style.border = "1px solid green";
  }

  if (last_Name.value == "") {
    error2.style.display = "block";
    last_Name.style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    error2.style.display = "none";
    last_Name.style.border = "1px solid green";
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (validateEmail(email_Input.value)) {
    error3.style.display = "none";
    email_Input.style.border = "1px solid green";
  } else {
    error3.style.display = "block";
    email_Input.style.border = "1px solid hsl(0, 66%, 54%)";
  }

  if (generalCheck.checked == false && supportCheck.checked == false) {
    error4.style.display = "block";
  }
  if (generalCheck.checked == true || supportCheck.checked == true) {
    error4.style.display = "none";
  }

  if (messageTextarea.value == "") {
    error5.style.display = "block";
    messageTextarea.style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    error5.style.display = "none";
    messageTextarea.style.border = "1px solid green";
  }

  if (agreeCheckBox.checked == false) {
    error6.style.display = "block";
  } else {
    error6.style.display = "none";
  }

  if (1) {
    success_alert.style.display = "block";
    success_alert.style.opacity = 1;
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }
});

generalCheck.addEventListener("click", function () {
  generalInput.classList.toggle("active_input");
});

supportCheck.addEventListener("click", function () {
  supportInput.classList.toggle("active_input");
});

// success_alert.style.display = "block";
// success_alert.style.opacity = 1;

// if(error1.style.display == "none" && error2.style.display == "none" && error3.style.display == "none" && error4.style.display == "none" && error5.style.display == "none" && error6.style.display == "none"){

// }
