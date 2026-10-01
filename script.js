// ================= REGISTER =================

function register() {

    let name =
        document.getElementById("registerName").value.trim();

    let username =
        document.getElementById("registerUsername").value.trim();

    let password =
        document.getElementById("registerPassword").value;

    let message =
        document.getElementById("registerMessage");


    // Mengecek apakah semua data sudah diisi

    if (name === "" || username === "" || password === "") {

        message.textContent =
            "Semua data harus diisi!";

        return;
    }


    // Mengambil data user

    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    // Mengecek username

    let existingUser =
        users.find(
            user => user.username === username
        );


    if (existingUser) {

        message.textContent =
            "Username sudah digunakan!";

        return;
    }


    // Membuat akun baru

    users.push({

        name: name,

        username: username,

        password: password

    });


    // Menyimpan akun

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    alert("Pendaftaran berhasil! Silakan login.");


    // Mengosongkan form

    document.getElementById("registerName").value = "";

    document.getElementById("registerUsername").value = "";

    document.getElementById("registerPassword").value = "";


    // Kembali ke login

    showLogin();
}


// ================= LOGIN =================

function login() {

    let username =
        document.getElementById("loginUsername").value.trim();

    let password =
        document.getElementById("loginPassword").value;


    // Mengambil akun

    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    // Mencari akun yang sesuai

    let user =
        users.find(
            user =>
            user.username === username &&
            user.password === password
        );


    if (user) {

        // Sembunyikan login

        document.getElementById("loginPage").style.display =
            "none";


        // Tampilkan website

        document.getElementById("website").style.display =
            "block";


        // Tampilkan nama user

        document.getElementById("userName").textContent =
            user.name;

        document.getElementById("welcomeName").textContent =
            user.name;


        // Hapus pesan error

        document.getElementById("loginMessage").textContent =
            "";

    } else {

        document.getElementById("loginMessage").textContent =
            "Username atau password salah!";

    }
}


// ================= KE REGISTER =================

function showRegister() {

    document.getElementById("loginPage").style.display =
        "none";

    document.getElementById("registerPage").style.display =
        "flex";

}


// ================= KE LOGIN =================

function showLogin() {

    document.getElementById("registerPage").style.display =
        "none";

    document.getElementById("loginPage").style.display =
        "flex";

    document.getElementById("registerMessage").textContent =
        "";

}


// ================= POPUP LOGOUT =================

function showLogout() {

    document.getElementById("popup").style.display =
        "flex";

}


// ================= TUTUP POPUP =================

function closePopup() {

    document.getElementById("popup").style.display =
        "none";

}


// ================= LOGOUT =================

function logout() {

    // Tutup popup

    document.getElementById("popup").style.display =
        "none";


    // Sembunyikan website

    document.getElementById("website").style.display =
        "none";


    // Kembali ke login

    document.getElementById("loginPage").style.display =
        "flex";


    // Kosongkan form login

    document.getElementById("loginUsername").value =
        "";

    document.getElementById("loginPassword").value =
        "";

}