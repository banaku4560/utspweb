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
    if (username == "bagusnayoko" && password == "bagus12345"){
        alert('Login berhasil');
        window.location = "\\beranda-logged-in.html";
        return false;
    }
    else {
        if (username == null || username == "") {
            alert("Silahkan masukkan username.")
            return false;
        }
        if (password == null || password == "") {
            alert("Silahkan masukkan password.");
            return false;
        }
        else{
            alert('Username atau Password salah!');
            return false;
        }
    }
       
}

function validateForm() {
    var nama = document.forms["form-register"]["nama"].value;
    var alamat = document.forms["form-register"]["alamat"].value;
    var email = document.forms["form-register"]["email"].value;
    var username = document.forms["form-register"]["username"].value;
    var notelp = document.forms["form-register"]["notelp"].value;
    var password = document.forms["form-register"]["password"].value;
    if (nama == null || nama == "") {
        alert("Harap isi kolom Nama Lengkap!");
        return false;
    }
    if (alamat == null || alamat == "") {
        alert("Harap isi kolom Alamat!");
        return false;
    }
    if (email == null || email == "") {
        alert("Harap isi kolom E-Mail!");
        return false;
    }
    if (username == null || username == "") {
        alert("Harap isi kolom Nama Pengguna!");
        return false;
    }
    if (notelp == null || notelp == "") {
        alert("Harap isi kolom Nomor Telepon!");
        return false;
    }
    if (password == null || password == "") {
        alert("Harap isi kolom Kata Sandi!");
        return false;
    }
    alert('Registrasi Berhasil!');
    window.location = "login.html";
}

function validateBuy() {
    var alamatkirim = document.getElementById("alamatkirim").value;
    var qty = document.getElementById("qty").value;
    if (qty == 0 || qty == ""){
        alert('Jumlah pembelian tidak boleh kosong!');
        return false;
    }
    if (alamatkirim == null || alamatkirim == ""){
        alert('Mohon isi alamat pengiriman');
        return false;
    }
    alert('Pembelian berhasil!')
    window.location = "beranda-order.html";
}