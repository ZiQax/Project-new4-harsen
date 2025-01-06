document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById("username");
    const email = document.getElementById("inMail");
    const noHp = document.getElementById("nohp");  // corrected ID here
    const password = document.getElementById("password");
    const passUse = document.getElementById("passUser");
    const submitButton = document.getElementById('submitButton');

    function addIdentity() {
        // Validate if all fields are filled
        if (username.value === "" || email.value === "" || noHp.value === "" || password.value === "" || passUse.value === "" ) {
            alert('Masukan identitas anda'); // Notify if any field is empty
        } 
        // Validate phone number to ensure it contains at least 10 digits
        else if (!/^\d{10,}$/.test(noHp.value)) {
            alert('Nomor handphone harus terdiri dari setidaknya 10 angka.');
        } 
        else {
            alert('Selamat anda sudah terdaftar');
        }
    }

    submitButton.addEventListener('click', addIdentity);
});
