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
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            //if (formcontents.elements[i].value !="") {
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
  }
}
function validatefirstname()
  {
  let x = document.getElementById("firstname").value;
  if( x.length<2) { 
    document.getElementById("fname_message").innerHTML = "First name needs to contain at least 2 characters";  
    error_flag = 1;
    }
  else {
    if (x.match(/[a-zA-Z2-5'-]+$/.test(x))) {
    document.getElementById("fname_message").innerHTML = "";  
    }
      else  {
        document.getElementById("fname_message").innerHTML = "Invalid characters in Field.";
        error_flag = 1;
      }
    }
  }

function validateMI()
  {
    let x = document.getElementById("middleinit").value;
    if( x.length>0) { 
      if (x.match(/[a-zA-Z ]/.test(x))) {
      document.getElementById("mi_message").innerHTML = "";  
      }
      else  {
        document.getElementById("mi_message").innerHTML = "Invalid characters in Field.";
        error_flag = 1;
      }
    }
  }

function validatelastname()
  {
    let x = document.getElementById("lastname").value;
    if( x.length<2) { 
      document.getElementById("lname_message").innerHTML = "Name needs to contain at least 2 characters.";
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
    x=document.getElementById("password").value;
    y=document.getElementById("confirmpassword").value;
    if ( x==y ) 
    {
      document.getElementById("password2_text").innerHTML = " ";
    } else  
      {
         document.getElementById("password2_text").innerHTML = "Passwords DO NOT match!";
         error_flag = 1;
      }
    }

function checkform() 
  {
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
    console.log("Error flag: "+error_flag);
      if (error_flag == "1")
      {
        alert("Please review and fix your errors where needed!");
      }
      else {
        document.getElementById("submit").disabled = false;
        }
  }
