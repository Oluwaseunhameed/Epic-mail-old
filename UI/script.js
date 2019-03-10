function addEvent() {
   document.getElementById('myInput').addEventListener("keyup", searchTable);
}
window.onload = addEvent;

//=================================== Modal ========================//

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("compose");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() { 
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) modal.style.display = "none";
}

//=================================== Search Table Function ========================//

function searchTable() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// ============================= Form Validation ================================
function checkEmpty(a){
  var x = document.getElementById(a).value;
  return x;
}
function errorSpace(a){
  var x = document.getElementById("error").innerHTML=a;
  return x;
}
function size(a){
  var x = document.getElementById(a).value.length;
  return x;
}
function login(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (checkEmpty("email") == null || checkEmpty("email") == "" || mailformat.test(checkEmpty("email")) == false) {
    errorSpace("Please Enter Valid Email");
    return false;
  }
  if (checkEmpty("pwd") == null || checkEmpty("pwd") == "") {
    errorSpace("Please Enter Password");
    return false;
  }

}
function signup(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (checkEmpty("fname") == null || checkEmpty("fname") == "") {
    errorSpace("Please Enter First name");
    return false;
  }
  if (checkEmpty("lname") == null || checkEmpty("lname") == "") {
    errorSpace("Please Enter Last name");
    return false;
  }
  if (checkEmpty("email") == null || checkEmpty("email") == "" || mailformat.test(checkEmpty("email")) == false) {
    errorSpace("Please Enter Valid Email");
    return false;
  }
  if (checkEmpty("pwd") == null || checkEmpty("pwd") == "") {
    errorSpace("Please Enter Password");
    return false;
  }
  if (checkEmpty("pwd") != checkEmpty("conpwd")) {
    errorSpace("Password Miss match");
    return false;
  }
  if (size("pwd") <= 4) {
    errorSpace("Minimum Password length 4");
    return false;
  }
}
