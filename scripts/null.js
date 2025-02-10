// ===============================
// 1. Apa itu null?
// ===============================
// null adalah nilai khusus dalam JavaScript yang menunjukkan bahwa variabel
// telah secara sengaja dikosongkan atau tidak memiliki nilai.
// null bukanlah 0, bukan undefined, bukan string kosong, dan bukan objek.

// ===============================
// 2. Contoh penggunaan null dalam kondisi
// ===============================

// Deklarasi variabel dengan nilai null
let data = null;

// ===============================
// 3. Mengecek apakah variabel bernilai null atau tidak
// ===============================

if (data === null) {
    console.log("Variabel data bernilai null (tidak memiliki nilai).");
} else {
    console.log("Variabel data memiliki nilai:", data);
}

// Penjelasan:
// - `data === null` mengecek apakah variabel memiliki nilai `null`.
// - Jika ya, maka akan mencetak pesan bahwa variabel tidak memiliki nilai.
// - Jika tidak, akan mencetak isi dari variabel `data`.

// ===============================
// 4. Menggunakan Operator Ternary (? :)
// ===============================

// Menggunakan ternary untuk menentukan teks berdasarkan nilai null
let result = (data === null) ? "Data kosong" : "Data tersedia";
console.log(result);

// Penjelasan:
// - Jika `data` bernilai null, maka `result` akan berisi "Data kosong".
// - Jika `data` memiliki nilai selain null, maka "Data tersedia".

// ===============================
// 5. Menggunakan Operator OR (||) untuk Nilai Default
// ===============================

// Menggunakan || untuk menggantikan nilai jika null atau falsy
let defaultData = data || "Nilai default jika null";
console.log(defaultData);

// Penjelasan:
// - Jika `data` bernilai `null` atau nilai falsy lainnya (seperti 0, "", false),
//   maka `defaultData` akan memiliki nilai "Nilai default jika null".
// - Jika `data` memiliki nilai, maka `defaultData` akan menyimpan nilai asli dari `data`.

// ===============================
// 6. Menggunakan Nullish Coalescing Operator (??)
// ===============================

// Menggunakan ?? untuk membedakan null dan undefined dari nilai falsy lainnya
let value = data ?? "Nilai default jika null atau undefined";
console.log(value);

// Penjelasan:
// - `??` hanya akan menggantikan nilai jika `data` adalah `null` atau `undefined`.
// - Jika `data` bernilai `0`, `false`, atau `""`, maka tetap digunakan nilai aslinya.

// ===============================
// 7. Contoh Fungsi yang Menangani Null
// ===============================

function checkData(input) {
    if (input === null) {
        return "Input bernilai null.";
    } else {
        return `Input memiliki nilai: ${input}`;
    }
}

console.log(checkData(null));  // Output: Input bernilai null.
console.log(checkData("Halo")); // Output: Input memiliki nilai: Halo

// Penjelasan:
// - Fungsi menerima parameter `input` dan mengecek apakah nilainya `null`.
// - Jika null, maka mengembalikan pesan "Input bernilai null."
// - Jika memiliki nilai, maka akan mencetak nilai tersebut.

