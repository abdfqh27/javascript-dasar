// ===============================
// 1. Apa itu Ternary Operator?
// ===============================
// Ternary Operator (operator ternary) adalah operator kondisional yang lebih singkat dibandingkan if-else.
// Bentuk umum:
// condition ? expression_if_true : expression_if_false
// Jika kondisi bernilai true, ekspresi pertama dijalankan, jika false, ekspresi kedua dijalankan.

// ===============================
// 2. Contoh Penggunaan Ternary Operator
// ===============================

// Contoh 1: Mengecek apakah angka genap atau ganjil
let angka = 10;
let hasil = (angka % 2 === 0) ? "Genap" : "Ganjil";
console.log(`Angka ${angka} adalah ${hasil}.`);

// ===============================
// 3. Menggunakan Ternary untuk Menangani Nilai Null atau Undefined
// ===============================

let namaPengguna = null;

// Jika namaPengguna null atau undefined, berikan nilai default "Guest"
let namaTampil = (namaPengguna !== null && namaPengguna !== undefined) ? namaPengguna : "Guest";
console.log(`Selamat datang, ${namaTampil}!`);

// ===============================
// 4. Ternary Operator dalam Nested (Bersarang)
// ===============================

let usia = 18;
let kategori = (usia < 13) ? "Anak-anak" 
             : (usia < 18) ? "Remaja" 
             : "Dewasa";

console.log(`Usia ${usia} tahun termasuk kategori: ${kategori}.`);

// ===============================
// 5. Penjelasan Program
// ===============================
// - Contoh 1: Mengecek angka genap/ganjil dengan ternary.
// - Contoh 2: Menggunakan ternary untuk menangani null atau undefined dengan nilai default "Guest".
// - Contoh 3: Nested ternary untuk menentukan kategori usia.

