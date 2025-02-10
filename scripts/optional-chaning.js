// ===============================
// 1. Apa itu Optional Chaining (?.)?
// ===============================
// Optional Chaining (`?.`) digunakan untuk mengakses properti dalam objek yang mungkin tidak ada,
// tanpa menyebabkan error jika properti tersebut undefined atau null.
// Jika properti ada, hasilnya nilai properti tersebut.
// Jika tidak ada, hasilnya undefined (bukan error).

// ===============================
// 2. Contoh Objek untuk Menggunakan Optional Chaining
// ===============================

let user = {
    name: "Andi",
    alamat: {
        kota: "Jakarta"
    }
};

// ===============================
// 3. Menggunakan Optional Chaining untuk Mengakses Properti yang Mungkin Tidak Ada
// ===============================

// Contoh 1: Mengakses properti yang ada
console.log(`Nama: ${user.name}`); // Output: Nama: Andi

// Contoh 2: Mengakses properti yang ada dalam objek nested
console.log(`Kota: ${user.alamat?.kota}`); // Output: Kota: Jakarta

// Contoh 3: Mengakses properti yang tidak ada tanpa optional chaining
// console.log(user.alamat.kecamatan); // Akan error jika tidak menggunakan ?.

// Contoh 4: Menggunakan Optional Chaining untuk Menghindari Error
console.log(`Kecamatan: ${user.alamat?.kecamatan}`); // Output: Kecamatan: undefined

// ===============================
// 4. Optional Chaining dalam Kondisi
// ===============================

let kodePos = user.alamat?.kodePos ?? "Tidak tersedia";
console.log(`Kode Pos: ${kodePos}`); // Output: Kode Pos: Tidak tersedia

