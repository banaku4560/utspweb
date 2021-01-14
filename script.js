function getInput(){
    var a=document.forms["biodata"]["nama"].value;
    var b=document.forms["biodata"]["alamat"].value;
    var c=document.forms["biodata"]["e-mail"].value;
    var d=document.forms["biodata"]["username"].value;
    var e=document.forms["biodata"]["telp"].value;

    var tabel = document.getElementById("tabelinput");
}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert("Silahkan masukkan username.")
        return false;
    }
    if (password == null || password == "") {
        alert("Silahkan masukkan password.");
        return false;
    }
    alert('Login berhasil');
    window.location = "\\beranda-logged-in.html";
}

// function validate() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
// }

// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "bagusnayoko" && password == "bagus12345"){
// alert ("Login successfully");
// window.location = "beranda-logged-in.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }