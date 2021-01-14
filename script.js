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