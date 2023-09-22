function handleGetFormData(){
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  let formDaftar = {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };

 return formDaftar;
}

let isiData = handleGetFormData();

let name = isiData.name;
let city = isiData.city;
let email = isiData.email;
let zipCode = isiData.zipCode;
let status = isiData.status;

function isNumber(str) {
  return !isNaN(str);
}
function checkboxIsChecked() {
var statusCheckbox = document.getElementById("status");
if (statusCheckbox.checked) {
  return true;
} else {
  return false;
}
}

function checkboxIsChecked() {
  let check_box = document.getElementById("status").checked;
  return check_box;
}

document.getElementById("submit-form").addEventListener("click", function (event) {
  if (!checkboxIsChecked()) {
      event.preventDefault(); 
      alert("Silahkan centang checkbox");
  }
});


function validateFormData(dataInput) {
  if (
    dataInput !== null &&
    typeof dataInput === "object" &&
    !isNaN(dataInput.zipCode) &&
    document.getElementById("status").checked) 
  {
    return true;
  } else {
    return false;
  }
}

function submit(lengkap) {
  lengkap.preventDefault(); 

  if (!validateFormData(handleGetFormData())) {
    document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
    
  } else {
    document.getElementById("warning").textContent ="";
 
  }
}

document.getElementById("myForm").addEventListener("submit", submit);

//Button Sign In
document.querySelector(".sign-In").addEventListener("click", function() {
  alert("Berhasil Login"); 
});

//Button ChatBot
document.querySelector(".button-chatbot").addEventListener("click", function() {
  alert("Berhasil ke Halaman ChatBot"); 
});

//Navbar Pembelajaran
document.querySelector("#pembelajaran").addEventListener("click", function() {
  alert("Berhasil ke Halaman Pembelajaran"); 
});

//Navbar Event
document.querySelector("#event").addEventListener("click", function() {
  alert("Berhasil ke Halaman Event"); 
});

//Navbar Event
document.querySelector("#home").addEventListener("click", function() {
  alert("Berhasil ke Halaman Home"); 
});

//Button Submit Formulir
document.querySelector("#submit-form").addEventListener("click", function() {
  alert("Berhasil ke Terdaftar ^^"); 
});

function submit() {
event.preventDefault();
if (!validateFormData(handleGetFormData())) {
  document.getElementById("warning").textContent =
    "Periksa form anda sekali lagi";
} else {
  document.getElementById("warning").textContent = "";
}
}

document.querySelector("form").addEventListener("submit", submit);











