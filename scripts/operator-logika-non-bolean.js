// ===============================
// 1. Apa itu Operator Logika di Non-Boolean?
// ===============================
// Biasanya, operator logika `&&` (AND) dan `||` (OR) digunakan untuk nilai boolean (true/false).
// Namun, dalam JavaScript, operator ini juga bekerja dengan non-boolean seperti string, angka, dan objek.
// Hasil dari operasi ini bergantung pada nilai truthy atau falsy dalam JavaScript.
//
// Nilai Falsy dalam JavaScript: false, 0, "", null, undefined, NaN
// Nilai selain itu dianggap Truthy (benar).

// ===============================
// 2. Contoh Penggunaan Operator `||` (OR) di Non-Boolean
// ===============================

let nama = "" || "Guest"; // "" adalah falsy, maka hasilnya "Guest"
console.log(`Nama: ${nama}`); // Output: Nama: Guest

let nilai = 0 || 100; // 0 adalah falsy, maka hasilnya 100
console.log(`Nilai: ${nilai}`); // Output: Nilai: 100

// ===============================
// 3. Contoh Penggunaan Operator `&&` (AND) di Non-Boolean
// ===============================

let user = "Andi" && "User Aktif"; // "Andi" adalah truthy, maka hasilnya "User Aktif"
console.log(`Status: ${user}`); // Output: Status: User Aktif

let saldo = 0 && "Saldo Tersedia"; // 0 adalah falsy, maka hasilnya 0
console.log(`Saldo: ${saldo}`); // Output: Saldo: 0

// ===============================
// 4. Penjelasan Operator di Non-Boolean
// ===============================
// - Operator `||` (OR): Mengambil nilai pertama yang truthy, atau nilai terakhir jika semua falsy.
// - Operator `&&` (AND): Mengambil nilai pertama yang falsy, atau nilai terakhir jika semua truthy.

