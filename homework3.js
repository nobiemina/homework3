/* 
 Name: Ojonobi Emina
 File: homework3.js
 Date Created: 13th April 2025
 Date Updated: 13th April 2025
 Purpose: Validate data on the fly from a form
*/
function setup()
  {
    var error_flag = 0;
    console.log(error_flag);
  }
function reset() {
  document.getElementById("outputformdata").innerHTML = "(Form successfully cleared!)";
}


function review() {
  var formcontents = document.getElementById("registrationForm");
  var formoutput = "<table class='output'><tr><th>Dataname</th><th>Type</th><th>Value</th></tr>";
  var datatype;
  
  for (var i = 0; i < formcontents.elements.length; i++) {
    var element = formcontents.elements[i];
    console.log("item: " + i + " " + element.name + " = " + element.value);
    
    datatype = element.type;
    
    switch (datatype) {
      case "checkbox":
        if (element.checked) {
          formoutput += "<tr><td align='right'>" + element.name + "</td>";
          formoutput += "<td align='right'>" + datatype + "</td>";
          formoutput += "<td class='outputdata'>Checked</td></tr>";
        }
        break;
        
      case "radio":
        if (element.checked) {
          formoutput += "<tr><td align='right'>" + element.name + "</td>";
          formoutput += "<td align='right'>" + datatype + "</td>";
          formoutput += "<td class='outputdata'>" + element.value + "</td></tr>";
        }
        break;
        
      case "button":
      case "submit":
      case "reset":
        // do nothing
        break;
        
      default:
        formoutput += "<tr><td align='right'>" + element.name + "</td>";
        formoutput += "<td align='right'>" + datatype + "</td>";
        formoutput += "<td class='outputdata'>" + element.value + "</td></tr>";
        break;
    }
  }

  formoutput += "</table>";
  document.getElementById("outputDiv").innerHTML = formoutput;
}


function validatefirstname() {
  let x = document.getElementById("firstname").value;
  if (x.length < 2) { 
    document.getElementById("fname_message").innerHTML = "First name needs to contain at least 2 characters";  
    error_flag = 1;
  }
  else {
    if (/^[a-zA-Z2-5'-]+$/.test(x)) {
      document.getElementById("fname_message").innerHTML = "";  
    }
    else {
      document.getElementById("fname_message").innerHTML = "Invalid characters in Field.";
      error_flag = 1;
    }
  }
}

function validateMI() {
  let x = document.getElementById("middleinit").value;
  if (x.length > 0) { 
    if (/^[a-zA-Z ]$/.test(x)) {
      document.getElementById("mi_message").innerHTML = "";  
    }
    else {
      document.getElementById("mi_message").innerHTML = "Invalid characters in Field.";
      error_flag = 1;
    }
  }
}


function validatelastname()
  {
    let x = document.getElementById("lastname").value;
    if( x.length<2) { 
      document.getElementById("lname_message").innerHTML = "Last name needs to contain at least 2 characters.";
      error_flag = 1;  
      }
    else {
      if (x.match(/[a-zA-Z3-5'-]+$/)) {
      document.getElementById("lname_message").innerHTML = "";  
      }
      else  {
        document.getElementById("lname_message").innerHTML = "Invalid characters in name.";
        error_flag = 1;
      }
    }
  }


function validatedate() {
  let x = document.getElementById("DOB").value;
  let inputDate = new Date(x);
  let today = new Date();
  let earliestDate = new Date();
  earliestDate.setFullYear(today.getFullYear() - 120);

  if (x.length === 0) {
    document.getElementById("DOBError").innerHTML = "Date field cannot be empty.";
    error_flag = 1;
  }
  else {
    if (inputDate > today || inputDate < earliestDate || isNaN(inputDate.getTime())) {
      document.getElementById("DOBError").innerHTML = "Date must be within the last 120 years and not in the future.";
      error_flag = 1;
    }
    else {
      document.getElementById("DOBError").innerHTML = "";
    }
  }
}

function formatSSN(input)
  {
    let digits = input.value.replace(/\D/g, ""); 
    if (digits.length > 9) { 
      digits = digits.slice(0, 9); 
    }

    let formatted = "";
    if (digits.length > 0) {
      formatted = digits.slice(0, 3);
    }
    if (digits.length >= 4) {
      formatted += "-" + digits.slice(3, 5);
    }
    if (digits.length >= 6) {
      formatted += "-" + digits.slice(5, 9);
    }

    input.value = formatted;
  }

function validatessn()
  {
    let x = document.getElementById("ssn").value;
    let digitsOnly = x.replace(/\D/g, "");

    if (digitsOnly.length !== 9) { 
      document.getElementById("ssnError").innerHTML = "SSN must be exactly 9 digits.";
      error_flag = 1;
    }
    else {
      if (/^\d{9}$/.test(digitsOnly)) {
        document.getElementById("ssnError").innerHTML = "";
      }
      else {
        document.getElementById("ssnError").innerHTML = "SSN must contain only numbers.";
        error_flag = 1;
      }
    }
  }


function validateaddr1(){
  let x = document.getElementById("addr1").value;
    if (x.length < 2 ) {  
      document.getElementById("addr1_message").innerHTML = " Input address here";  
      error_flag = 1; 
      console.log(error_flag);
    }
      else { 
        document.getElementById("addr1_message").innerHTML = "";  
      }
      console.log(addr1_message);
}
function validateaddr2(){
  let x = document.getElementById("addr2").value;
    if (x.length < 2 ) {  
      document.getElementById("addr2_message").innerHTML = "Enter something on address line";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("addr2_message").innerHTML = "";  
      }
      console.log(addr2_message);
}
function validatecity() {
  if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
      document.getElementById("city_message").innerHTML = "";  
      }
    else  {
          document.getElementById("city_message").innerHTML = "Please insert valid characters.";
          error_flag = 1;
          }
}
function validatestate() {
  z=document.getElementById("state").value;
  if(z==" ") { 
    document.getElementById("state_message").innerHTML = "Please choose a state";  
    error_flag = 1;
    }
  else {
    document.getElementById("state_message").innerHTML = ""; 
    }
}
function passwordinput()
    {
    var passwordoutput;
    var passwordinput = document.getElementById("password").value;
    console.log(passwordinput);
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter At least 1 lower case letter";
      error_flag = 1;
    } 
    else {
      passwordoutput = "";
    }
    document.getElementById("password_message1").innerHTML = passwordoutput;
    
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter";
      error_flag = 1;
    } 
        else {
        passwordoutput = "";
    }
    document.getElementById("password_message2").innerHTML = passwordoutput;
  
  // Validate numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter at least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = " ";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    
    // Validate special characters
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter at least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = " ";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
  
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter at least 8 characters";
      error_flag = 1;
  } else {
      passwordoutput = " ";
  }
  document.getElementById("password_message5").innerHTML = passwordoutput;
  }

function passwordmatch() {
   function passwordmatch()
  {
    let x = document.getElementById("password").value;
    let y = document.getElementById("confirmpassword").value;

    if (x == y) { 
      document.getElementById("password2_text").innerHTML = "";
    } 
    else {
      document.getElementById("password2_text").innerHTML = "Passwords DO NOT match!";
      error_flag = 1;
    }
  }


function checkform() {
  error_flag = "0";

  validatefirstname();
  validateMI();
  validatelastname();
  validateaddr1();
  validateaddr2();
  validatecity();
  validatestate();
  passwordinput();
  passwordmatch();

  console.log("Error flag: " + error_flag);

  if (error_flag === "1") {
    alert("Please review and fix your errors where needed!");
  } else {
    document.getElementById("submit").disabled = false;
  }
}

