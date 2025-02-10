// ===============================
// 1. Apa itu Nullish Coalescing Operator (??)?
// ===============================
// Operator `??` digunakan untuk memberikan nilai default ketika nilai yang diperiksa adalah `null` atau `undefined`.
// Syntax: `nilai1 ?? nilai2`
// - Jika `nilai1` **tidak null dan tidak undefined**, maka hasilnya `nilai1`.
// - Jika `nilai1` **null atau undefined**, maka hasilnya `nilai2` (nilai default).

// ===============================
// 2. Contoh Penggunaan Nullish Coalescing Operator
// ===============================

// Contoh 1: Nilai yang diberikan adalah null
let username = null;
let tampilNama = username ?? "Guest"; // Jika username null, gunakan "Guest"

console.log(`Selamat datang, ${tampilNama}!`); // Output: Selamat datang, Guest!

// Contoh 2: Nilai yang diberikan adalah undefined
let alamat;
let tampilAlamat = alamat ?? "Alamat tidak tersedia"; // Jika alamat undefined, gunakan default

console.log(`Alamat: ${tampilAlamat}`); // Output: Alamat: Alamat tidak tersedia

// Contoh 3: Nilai yang diberikan ada (bukan null/undefined)
let umur = 25;
let tampilUmur = umur ?? "Umur tidak diketahui"; // Karena umur ada, hasilnya tetap umur

console.log(`Umur: ${tampilUmur}`); // Output: Umur: 25

