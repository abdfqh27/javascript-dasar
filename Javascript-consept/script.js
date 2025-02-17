// ==================
// Fungsi untuk Proses Data
// ==================
function prosesData() {
    let input = document.getElementById("inputNumber").value;
    let errorMessage = document.getElementById("error-message");
    let resultContainer = document.getElementById("result");

    // Bersihkan pesan error sebelumnya
    errorMessage.innerText = "";
    resultContainer.innerHTML = "";

    // Validasi input
    let angka = Number(input);
    if (isNaN(angka) || input.trim() === "") {
        errorMessage.innerText = "❌ Masukkan angka yang valid!";
        return;
    }

    // Operator Matematika
    let hasilTambah = angka + 5;
    let hasilKali = angka * 2;

    // Operator Perbandingan
    let lebihBesarDariLima = angka > 5;

    // Operator Logika
    let status = angka > 0 && angka < 100 ? "✅ Angka valid" : "❌ Angka tidak valid";

    // Nullish Coalescing Operator
    let nilaiKosong = null;
    let hasilNullish = nilaiKosong ?? "Default Value";

    // Optional Chaining
    let user = { name: "Budi", age: 25 };
    let alamat = user?.address?.city ?? "Alamat tidak tersedia";

    // Truthy & Falsy
    let nilai = angka ? "Truthy" : "Falsy";

    // Switch Case
    let kategori;
    switch (true) {
        case angka < 10:
            kategori = "🔹 Kecil";
            break;
        case angka < 50:
            kategori = "🔸 Sedang";
            break;
        default:
            kategori = "🔴 Besar";
    }

    // Perulangan (Menampilkan dalam bentuk kartu)
    let perulanganHTML = "";
    for (let i = 1; i <= 5; i++) {
        perulanganHTML += `<div class="card">Iterasi ${i}</div>`;
    }

    // Operator `typeof`
    let tipeData = typeof angka;

    // Menampilkan hasil dalam bentuk tabel
    resultContainer.innerHTML = `
        <table border="1" width="100%">
            <tr><td><strong>Angka</strong></td><td>${angka}</td></tr>
            <tr><td>Tambah 5</td><td>${hasilTambah}</td></tr>
            <tr><td>Kali 2</td><td>${hasilKali}</td></tr>
            <tr><td>Lebih besar dari 5</td><td>${lebihBesarDariLima}</td></tr>
            <tr><td>Status</td><td>${status}</td></tr>
            <tr><td>Nilai Kosong (Nullish Coalescing)</td><td>${hasilNullish}</td></tr>
            <tr><td>Alamat</td><td>${alamat}</td></tr>
            <tr><td>Truthy/Falsy</td><td>${nilai}</td></tr>
            <tr><td>Kategori</td><td>${kategori}</td></tr>
            <tr><td>Tipe Data</td><td>${tipeData}</td></tr>
        </table>
        <h3>Perulangan:</h3>
        ${perulanganHTML}
    `;
}
