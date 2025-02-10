// ===============================
// 1. Apa itu Operator `in`?
// ===============================
// Operator `in` digunakan untuk mengecek apakah suatu properti atau key ada dalam objek atau array.
// Syntax: `"property" in object`
// Jika properti ada dalam objek, hasilnya `true`, jika tidak ada, hasilnya `false`.

// ===============================
// 2. Contoh Objek untuk Menggunakan Operator `in`
// ===============================

let user = {
    name: "Andi",
    age: 25,
    email: null
};

// ===============================
// 3. Menggunakan Operator `in` untuk Mengecek Properti
// ===============================

if ("name" in user) {
    console.log("Properti 'name' ada dalam objek user.");
} else {
    console.log("Properti 'name' tidak ditemukan dalam objek user.");
}

if ("address" in user) {
    console.log("Properti 'address' ada dalam objek user.");
} else {
    console.log("Properti 'address' tidak ditemukan dalam objek user.");
}

// ===============================
// 4. Menggunakan `in` dengan null dan undefined
// ===============================

if ("email" in user) {
    console.log("Properti 'email' ada dalam objek user.");
    if (user.email === null) {
        console.log("Namun, nilainya adalah null.");
    }
} else {
    console.log("Properti 'email' tidak ditemukan dalam objek user.");
}

if ("phone" in user) {
    console.log("Properti 'phone' ada dalam objek user.");
} else {
    console.log("Properti 'phone' tidak ditemukan dalam objek user.");
}

// ===============================
// 5. Memastikan Properti Tidak Null atau Undefined
// ===============================

if ("email" in user && user.email !== null && user.email !== undefined) {
    console.log("Properti 'email' ada dan memiliki nilai:", user.email);
} else {
    console.log("Properti 'email' tidak ada atau nilainya null/undefined.");
}

// ===============================
// 6. Penjelasan Program
// ===============================
// - `"name" in user` mengecek apakah properti 'name' ada dalam objek `user` (hasilnya true).
// - `"address" in user` mengecek properti yang tidak ada (hasilnya false).
// - `"email" in user` hasilnya true karena 'email' ada dalam objek, tapi nilainya `null`.
// - `"phone" in user` hasilnya false karena properti 'phone' tidak ada.
// - `&& user.email !== null && user.email !== undefined` memastikan properti tidak kosong.

