const username = document.getElementById('username');
const jabatan = document.getElementById('jabatan');
const submitButton = document.getElementById('submitButton');

function masuk() {
    if (username.value === "" || jabatan.value === "") {
        alert ("Silahkan isi form");
    } else {
        // Menyimpan data ke localStorage
        localStorage.setItem('username', username.value);
        localStorage.setItem('jabatan', jabatan.value);

        alert ("data behasil disimpan");

        // Redirect ke halaman lain setelah data disimpan
        window.location.href = 'dashboard.html';  // Ganti dengan halaman tujuan
    }
}

submitButton.addEventListener('click', masuk);