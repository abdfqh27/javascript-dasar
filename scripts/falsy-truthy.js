// ===============================
// 1. Apa itu Falsy dan Truthy?
// ===============================
// Dalam JavaScript, setiap nilai dianggap sebagai Truthy (benar) atau Falsy (salah).
// Nilai **Falsy** akan dianggap sebagai false ketika digunakan dalam kondisi IF.
// Nilai **Truthy** akan dianggap sebagai true ketika digunakan dalam kondisi IF.

// ===============================
// 2. Daftar Nilai Falsy
// ===============================
// Hanya ada **6 nilai** yang dianggap Falsy dalam JavaScript:
// - false
// - 0 (angka nol)
// - "" (string kosong)
// - null
// - undefined
// - NaN (Not a Number)

// ===============================
// 3. Contoh Falsy
// ===============================

let nilaiFalsy = [false, 0, "", null, undefined, NaN];

nilaiFalsy.forEach((nilai, index) => {
    if (nilai) {
        console.log(`Falsy Index ${index}: Truthy`);
    } else {
        console.log(`Falsy Index ${index}: Falsy`);
    }
});
/* Output:
Falsy Index 0: Falsy
Falsy Index 1: Falsy
Falsy Index 2: Falsy
Falsy Index 3: Falsy
Falsy Index 4: Falsy
Falsy Index 5: Falsy
*/

// ===============================
// 4. Contoh Truthy
// ===============================
// Semua nilai yang **bukan** Falsy dianggap Truthy.

let nilaiTruthy = [true, 1, -1, "Hello", "0", {}, [], function(){}];

nilaiTruthy.forEach((nilai, index) => {
    if (nilai) {
        console.log(`Truthy Index ${index}: Truthy`);
    } else {
        console.log(`Truthy Index ${index}: Falsy`);
    }
});
/* Output:
Truthy Index 0: Truthy
Truthy Index 1: Truthy
Truthy Index 2: Truthy
Truthy Index 3: Truthy
Truthy Index 4: Truthy
Truthy Index 5: Truthy
Truthy Index 6: Truthy
Truthy Index 7: Truthy
*/

// ===============================
// 5. Contoh Penggunaan Falsy dan Truthy dalam Kondisi
// ===============================

let username = ""; // String kosong (Falsy)
let defaultUser = username || "Guest"; // Menggunakan OR (||) untuk memberikan nilai default

console.log(`Selamat datang, ${defaultUser}!`); // Output: Selamat datang, Guest!

let saldo = 100; // Angka positif (Truthy)
if (saldo) {
    console.log("Saldo mencukupi!"); // Output: Saldo mencukupi!
}

// ===============================
// 6. Kesimpulan
// ===============================
// ✅ **Falsy hanya ada 6 nilai dalam JavaScript.**
// ✅ **Semua yang bukan Falsy dianggap Truthy.**
// ✅ **Truthy/Falsy sering digunakan dalam kondisi IF atau untuk memberikan nilai default.**
