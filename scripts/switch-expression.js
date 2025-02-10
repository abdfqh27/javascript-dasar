// ===============================
// 1. Apa itu switch?
// ===============================
// switch adalah pernyataan kontrol yang digunakan untuk menangani beberapa kemungkinan nilai
// dari suatu variabel, sehingga lebih rapi dibandingkan banyak if-else.

// ===============================
// 2. Contoh Penggunaan Switch Expression
// ===============================

// Variabel untuk menyimpan nama hari
let day = "Jumat";

// Menggunakan switch untuk menentukan pesan berdasarkan hari
switch (day) {
    case "Senin":
        console.log("Hari Senin: Awal minggu, semangat bekerja!");
        break;
    case "Selasa":
        console.log("Hari Selasa: Waktunya produktif!");
        break;
    case "Rabu":
        console.log("Hari Rabu: Pertengahan minggu, tetap semangat!");
        break;
    case "Kamis":
        console.log("Hari Kamis: Satu langkah lagi menuju akhir pekan!");
        break;
    case "Jumat":
        console.log("Hari Jumat: Akhir pekan sudah dekat!");
        break;
    case "Sabtu":
        console.log("Hari Sabtu: Waktunya beristirahat atau berlibur!");
        break;
    case "Minggu":
        console.log("Hari Minggu: Santai sebelum memulai minggu baru!");
        break;
    default:
        console.log("Hari tidak valid. Masukkan nama hari yang benar.");
}

// ===============================
// 3. Penjelasan Program
// ===============================
// - Variabel `day` menyimpan nama hari yang ingin diperiksa.
// - `switch` akan membandingkan nilai `day` dengan setiap `case`.
// - Jika ada `case` yang cocok, maka kode di dalamnya akan dijalankan.
// - `break` digunakan untuk menghentikan eksekusi setelah satu case terpenuhi.
// - Jika tidak ada case yang cocok, maka blok `default` akan dijalankan.

